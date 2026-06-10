/**
 * 3D Transform Slice Gallery Component
 */
class SliceGallery {
    constructor(containerId, images) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.images = images;
        this.currentIndex = 0;
        this.isAnimating = false;
        
        this.staticImage = document.createElement('img');
        this.staticImage.style.width = '100%';
        this.staticImage.style.height = '100%';
        this.staticImage.style.objectFit = 'cover';
        this.staticImage.style.position = 'absolute';
        this.staticImage.style.top = '0';
        this.staticImage.style.left = '0';
        this.staticImage.src = this.images[this.currentIndex];
        
        this.container.appendChild(this.staticImage);
        
        this.startTimer();

        this.container.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('openLightbox', { detail: { index: this.currentIndex } }));
        });

        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.container.click();
            }
        });
        
        const prevBtn = document.querySelector('.slice-prev');
        const nextBtn = document.querySelector('.slice-next');
        if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));
    }
    
    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.navigate(1), 3000);
    }
    
    navigate(dir) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.startTimer();
        
        const nextIndex = (this.currentIndex + dir + this.images.length) % this.images.length;
        const currentSrc = this.images[this.currentIndex];
        const nextSrc = this.images[nextIndex];
        
        // Hide the static image during rotation so it doesn't peek through the gaps
        this.staticImage.style.visibility = 'hidden';
        
        const types = ['verticalSlices', 'horizontalSlices', 'wholeCube'];
        const type = types[Math.floor(Math.random() * types.length)];
        const pieces = type === 'wholeCube' ? 1 : Math.floor(Math.random() * 3) + 3;
        
        let orientation = 'vertical';
        let rotateAxis = 'rotateX';
        
        if (type === 'verticalSlices') {
            orientation = 'vertical';
            rotateAxis = Math.random() > 0.5 ? 'rotateX' : 'rotateY';
        } else if (type === 'horizontalSlices') {
            orientation = 'horizontal';
            rotateAxis = Math.random() > 0.5 ? 'rotateX' : 'rotateY';
        } else {
            orientation = Math.random() > 0.5 ? 'vertical' : 'horizontal';
            rotateAxis = Math.random() > 0.5 ? 'rotateX' : 'rotateY';
        }
        
        const direction = Math.random() > 0.5 ? 1 : -1;
        
        this.animateSlices(pieces, orientation, rotateAxis, direction, currentSrc, nextSrc, () => {
            this.currentIndex = nextIndex;
            
            // Show the static image instantly after rotation ends
            this.staticImage.src = this.images[this.currentIndex];
            this.staticImage.style.visibility = 'visible';
            
            const slices = this.container.querySelectorAll('.slice-wrapper');
            slices.forEach(s => s.remove());
            this.isAnimating = false;
        });
    }
    
    animateSlices(pieceCount, orientation, rotateAxis, direction, currentSrc, nextSrc, callback) {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;
        
        let sliceWidth = orientation === 'vertical' ? width / pieceCount : width;
        let sliceHeight = orientation === 'horizontal' ? height / pieceCount : height;
        
        let depth = rotateAxis === 'rotateX' ? sliceHeight : sliceWidth;
        let halfDepth = depth / 2;
        let rotateDeg = direction * 90; 
        
        let completed = 0;
        
        for (let i = 0; i < pieceCount; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'slice-wrapper';
            
            let left = orientation === 'vertical' ? i * sliceWidth : 0;
            let top = orientation === 'horizontal' ? i * sliceHeight : 0;
            
            Object.assign(wrapper.style, {
                left: left + 'px',
                top: top + 'px',
                width: sliceWidth + 'px',
                height: sliceHeight + 'px',
                transform: `translateZ(-${halfDepth}px)`,
                transition: `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.1}s`
            });
            
            const inner = document.createElement('div');
            inner.className = 'slice-inner';
            inner.style.animationDelay = `${i * 0.1}s`;
            
            let faces = [];
            if (rotateAxis === 'rotateX') {
                faces = [ { rx: 0, ry: 0, n: 'front' }, { rx: 180, ry: 0, n: 'back' }, { rx: 90, ry: 0, n: 'top' }, { rx: -90, ry: 0, n: 'bottom' } ];
            } else {
                faces = [ { rx: 0, ry: 0, n: 'front' }, { rx: 0, ry: 180, n: 'back' }, { rx: 0, ry: 90, n: 'right' }, { rx: 0, ry: -90, n: 'left' } ];
            }
            
            let targetAngle = direction === 1 ? -90 : 90;
            
            faces.forEach(f => {
                const faceEl = document.createElement('div');
                faceEl.className = 'slice-face';
                Object.assign(faceEl.style, {
                    width: sliceWidth + 'px',
                    height: sliceHeight + 'px',
                    transform: `rotateX(${f.rx}deg) rotateY(${f.ry}deg) translateZ(${halfDepth}px)`
                });
                
                let angleToMatch = rotateAxis === 'rotateX' ? f.rx : f.ry;
                
                if (f.n === 'front') {
                    faceEl.appendChild(this.createImg(sliceWidth, sliceHeight, currentSrc, left, top, width, height));
                } else if (angleToMatch === targetAngle) {
                    faceEl.appendChild(this.createImg(sliceWidth, sliceHeight, nextSrc, left, top, width, height));
                } else {
                    faceEl.style.background = '#111';
                }
                inner.appendChild(faceEl);
            });
            
            wrapper.appendChild(inner);
            this.container.appendChild(wrapper);
            
            wrapper.offsetHeight; // trigger layout
            wrapper.style.transform = `translateZ(-${halfDepth}px) ${rotateAxis}(${rotateDeg}deg)`;
            
            let transitionCalled = false;
            const onTransitionEnd = (e) => {
                if (e && e.target !== wrapper) return;
                if (transitionCalled) return;
                transitionCalled = true;
                completed++;
                if (completed === pieceCount) callback();
            };

            wrapper.addEventListener('transitionend', onTransitionEnd);
            
            // Safety timeout fallback (1.2s transition time + stagger delay)
            setTimeout(onTransitionEnd, 1200 + (i * 100));
        }
    }
    
    createImg(w, h, src, left, top, totalW, totalH) {
        const img = document.createElement('img');
        img.src = src;
        Object.assign(img.style, {
            position: 'absolute',
            width: totalW + 'px',
            height: totalH + 'px',
            maxWidth: 'none',
            maxHeight: 'none',
            left: -left + 'px',
            top: -top + 'px',
            objectFit: 'cover'
        });
        return img;
    }
}

function initSliceGallery() {
    const galleryImages = Array.from(document.querySelectorAll('.gallery-source')).map(img => img.src);
    if (galleryImages.length > 0) {
        new SliceGallery('slice-gallery', galleryImages);
    }
    return galleryImages;
}

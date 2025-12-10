export class Menu{
    stateClasses = {
        isActive: 'is-active',
    }
    
    state = {
        move: false,
        open: false,
    }

    constructor(main, btn, wrapper, content){
        this.main = document.querySelector(main);
        this.btn = this.main.querySelector(btn);
        this.wrapper = this.main.querySelector(wrapper);
        this.content = this.main.querySelector(content);

        this.init();
    }

    init(){
        this.trigger();
    }

    trigger(){
        this.btn.onclick = () => {
            this.toggleOpen();
        }
    }

    stateSwitch(){
        if (this.state.move){
            this.state.move = true;
        }else{
            this.setTimeout(() => {
                this.state.move = false;
            });
        }
    }

    activeSwitch(){
        if (!this.state.open) {
            this.btn.classList.add(this.stateClasses.isActive);
        }else{
            this.btn.classList.remove(this.stateClasses.isActive);
        }
    }

    toggleOpen(){
        if (this.state.move) return;

        this.stateSwitch();

        if (!this.state.open) {
            this.activeSwitch();
            this.state.open = true;

            const newHeight = this.content.offsetHeight + 'px';

            this.wrapper.style.height = newHeight;

            this.setTimeout(() => {
                this.wrapper.style.height = 'auto';
            });
        }else{
            this.activeSwitch();
            this.state.open = false;

            const newHeight = this.content.offsetHeight + 'px';

            this.wrapper.style.height = newHeight;

            this.setTimeout(() => {
                this.wrapper.style.height = 0 + 'px';
            });
        }

        this.stateSwitch();
    }

    setTimeout(fn){
        setTimeout(() => {
            fn();
        }, 200);
    }
}
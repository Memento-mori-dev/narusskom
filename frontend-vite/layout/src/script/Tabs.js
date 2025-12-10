export class Tabs{
    stateClasses = {
        isActive: 'is-active',
    }
    
    state = {
        move: false,
    }

    constructor(main, btns, state, items){
        this.main = document.querySelector(main);
        this.btns = this.main.querySelectorAll(btns);
        this.state = this.main.querySelector(state);
        this.items = this.main.querySelectorAll(items);

        this.init();
    }

    init(){
        this.trigger();
    }

    trigger(){
        this.btns.forEach((btn, index) => {
            btn.onclick = () => {
                if (this.state.move) return;

                this.open(index);

                this.btns.forEach((item, indexThis) => {
                    if (index == indexThis) {
                        item.classList.add(this.stateClasses.isActive);

                        this.state.textContent = item.innerText;
                        
                    }else{
                        item.classList.remove(this.stateClasses.isActive);
                    }
                });
            }


        });
    }

    open(index){
        this.stateSwitch();

        this.items.forEach((item, indexThis) => {
            if (index == indexThis) {
                item.classList.add(this.stateClasses.isActive);
            }else{
                item.classList.remove(this.stateClasses.isActive);
            }
        });

        this.stateSwitch();
    }

    stateSwitch(){
        if (!this.state.move){
            this.state.move = true;
        }else{
            this.setTimeout(() => {
                this.state.move = false;
            });
        }
    }

    setTimeout(fn){
        setTimeout(() => {
            fn();
        }, 1200);
    }
}
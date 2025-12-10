export class Answers{
    stateClasses = {
        isActive: 'is-active',
    }
    
    state = {
        move: false,
    }

    constructor(main, item, btnItem, wrapperItem, contentItem){
        this.main = document.querySelector(main);
        this.arrItem = this.main.querySelectorAll(item);
        this.arrBtnItem = this.main.querySelectorAll(btnItem);
        this.arrWrapperItem = this.main.querySelectorAll(wrapperItem);
        this.arrContentItem = this.main.querySelectorAll(contentItem);

        this.init();
    }

    init(){
        this.trigger();
    }

    trigger(){
        this.arrBtnItem.forEach((btn, index) => {
            btn.onclick = () => {
                if (this.state.move) return;

                console.log(this.state.move);


                this.stateSwitch();

                this.open(index);

                this.stateSwitch();
            }
        });
    }

    open(index){
        this.arrItem.forEach((item, indexThis) => {
            if (index == indexThis) {
                item.classList.add(this.stateClasses.isActive);
            }else{
                if (item.classList.contains) {
                    item.classList.remove(this.stateClasses.isActive);
                }
            }
        });
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
        }, 1000);
    }
}
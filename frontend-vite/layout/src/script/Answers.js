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

                this.stateSwitch();

                this.toggle(index);

                this.stateSwitch();
            }
        });
    }

    toggle(index){
        this.arrItem.forEach((item, indexThis) => {
            if (index == indexThis) {
                if (!item.classList.contains(this.stateClasses.isActive)) {
                    this.open(indexThis, item);
                }else{
                    this.close(indexThis, item);
                }
                
            }else{
                if (item.classList.contains(this.stateClasses.isActive)) {
                    this.close(indexThis, item);
                }
            }
        });
    }

    open(index, item){
        const wrapper = this.arrWrapperItem[index];
        const content = this.arrContentItem[index];

        item.classList.add(this.stateClasses.isActive);

        const newHeight = content.offsetHeight + 'px';

        wrapper.style.height = newHeight;

        this.setTimeout(()=> {
            wrapper.style.height = 'auto';
        })
    }

    close(index, item){
        const wrapper = this.arrWrapperItem[index];
        const content = this.arrContentItem[index];

        item.classList.remove(this.stateClasses.isActive);

        const newHeight = content.offsetHeight + 'px';

        wrapper.style.height = newHeight;

        this.setTimeout(() =>{
            wrapper.style.height = 0 + 'px';
        })
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
        }, 200);
    }
}
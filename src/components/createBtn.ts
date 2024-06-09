
interface Btn {
    (title: string, disabled?: boolean, value?: string, className?: string, id?: string, type?:string): HTMLButtonElement;
  }

export const createBtn:Btn = (title: string, disabled?: boolean, value?: string, className?: string, id?: string, type?:string):HTMLButtonElement =>{
    const btn: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
    btn.classList.add("button");
    if(className){
        btn.classList.add(className);
    }
    if(disabled){
        btn.classList.add('disabled');
    }
    if(value){
        btn.value = value;
    }
    if(id){
        btn.id = id;
    }
    if(type){
        btn.setAttribute("type", type);
    }

    btn.innerText = title;
   
    return btn;
}
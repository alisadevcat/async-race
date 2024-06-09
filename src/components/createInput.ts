
export function createFormInput(inputId?: string): HTMLInputElement {
    const input = document.createElement('INPUT') as HTMLInputElement;
    input.setAttribute('type', 'text');
    input.required = true;
    if(inputId){
        input.id = inputId;
    }
    return input;
  }
import { makeButtonsArray } from '../utitlities/helpers';
import updateGaragePage from '../utitlities/update-page';
import { garagePerPage as perPage } from '../utitlities/variables';

const getPagination: (totalRecords:number) => HTMLElement = (totalRecords ) => {
  let activePage: number;
  const buttonsCount = Math.floor(Math.ceil(totalRecords / perPage));
  const paginationButtons: number[] = makeButtonsArray(buttonsCount); 

  const setActivePage = (value: number) => {
    activePage = value;
 
    document.querySelectorAll('.page-btn').forEach((item) => {
      if( Number((item as HTMLElement).dataset.id) === value){
        item.classList.add('page-active');
      }else{
        item.classList.remove('page-active');
      }
    });

    localStorage.setItem('currenPage', String(value));
    updateGaragePage();
  };

  const onPageClick = (num: number) => {
    setActivePage(num);
  };

  const setPrevious = () => {
    if (activePage != 1) {
      setActivePage(activePage - 1);
    }
  };

  const setNext = () => {
    if (activePage != buttonsCount) {
      setActivePage(activePage + 1);
    }
  };

  const renderPagination = (paginationButtons: number[]): HTMLElement => {
    const paginationDiv = document.createElement('div');
    paginationDiv.classList.add('pagination');
    const list = renderList(paginationButtons);
    if (list) {
      paginationDiv.appendChild(list);
    }
    return paginationDiv;
  };

  const renderPaginationButton = (handler: (event: Event) => void, title: string): HTMLElement => {
    const li = document.createElement('li');
    li.classList.add('pagination-item');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    btn.addEventListener('click', handler);
    btn.innerHTML = title;
    btn.classList.add('page-btn');
    btn.dataset.id = title;
    span.appendChild(btn);
    li.appendChild(span);
    return li;
  };

  const renderList = (paginationButtons: number[]): HTMLElement => {
    const list = document.createElement('ul');
    list.classList.add('pagination-list');
    const prev = renderPaginationButton(setPrevious, '&#60;&#60;');
    list.appendChild(prev);
    paginationButtons &&
      paginationButtons.forEach((num) => {
        list.appendChild(renderPaginationButton(() => onPageClick(num), String(num)));
      });
    const next = renderPaginationButton(setNext, '&#62;&#62;');
    list.appendChild(next);
    return list;
  };

  return renderPagination(paginationButtons);
};

export default getPagination;

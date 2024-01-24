'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (e) => {
    // console.log(e);
    const filter = e.target.dataset.category
    if (filter === null) {
        return;
    }

    handleActiveSelection(e.target);
    filterProjects(filter);
    
})

function handleActiveSelection(target) {
    const active = document.querySelector('.category-selected')
    active.classList.remove('category-selected');
    target.classList.add('category-selected');
}

function filterProjects(filter) {
    projectsContainer.classList.add('anim-out');

    projects.forEach((item) => {
        if (filter === 'all' || filter === item.dataset.type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    },200)
}
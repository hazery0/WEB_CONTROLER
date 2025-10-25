document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url && url !== 'YOUR_PROJECT_LINK_1' && url !== 'YOUR_PROJECT_LINK_2' && 
                url !== 'YOUR_PROJECT_LINK_3' && url !== 'YOUR_PROJECT_LINK_4' && url !== 'YOUR_PROJECT_LINK_5') {
                window.open(url, '_blank');
            } else {
                alert('请先填写此项目的链接地址！');
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
        }
    });
});
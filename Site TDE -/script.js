document.addEventListener('DOMContentLoaded', function() {
    var editButtons = document.querySelectorAll('.edit-button');

    editButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var subject = event.target.dataset.subject;
            var description = document.getElementById(subject + '-description');

            var newDescription = prompt('Digite a nova descrição para ' + subject + ':', description.textContent);

            if (newDescription !== null) {
                description.textContent = newDescription;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var subjects = document.querySelectorAll('.subject');

    subjects.forEach(function(subject) {
        var title = subject.querySelector('.subject-title');
        var description = subject.querySelector('.subject-description');

        description.style.display = 'none';

        title.addEventListener('click', function() {
            var isHidden = description.style.display === 'none';

            if (isHidden) {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});


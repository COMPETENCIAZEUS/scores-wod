document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo
    const categories = {
        beginner: {
            men: [
                { name: 'Juan Pérez', position: 1, points: 95, events: 5, heats: 'Heat 1', lane: 3, schedule: '10:00 AM' },
                { name: 'Carlos Díaz', position: 2, points: 90, events: 5, heats: 'Heat 1', lane: 4, schedule: '10:00 AM' },
            ],
            women: [
                { name: 'Ana López', position: 1, points: 98, events: 5, heats: 'Heat 2', lane: 2, schedule: '11:00 AM' },
                { name: 'María Gómez', position: 2, points: 85, events: 5, heats: 'Heat 2', lane: 3, schedule: '11:00 AM' },
            ]
        },
        intermediate: {
            men: [
                { name: 'Luis Fernández', position: 1, points: 100, events: 5, heats: 'Heat 3', lane: 1, schedule: '12:00 PM' },
                { name: 'Miguel Torres', position: 2, points: 89, events: 5, heats: 'Heat 3', lane: 2, schedule: '12:00 PM' },
            ],
            women: [
                { name: 'Laura Ramírez', position: 1, points: 94, events: 5, heats: 'Heat 4', lane: 1, schedule: '1:00 PM' },
                { name: 'Elena Morales', position: 2, points: 87, events: 5, heats: 'Heat 4', lane: 2, schedule: '1:00 PM' },
            ]
        },
        advanced: {
            men: [
                { name: 'David Hernández', position: 1, points: 105, events: 5, heats: 'Heat 5', lane: 1, schedule: '2:00 PM' },
                { name: 'Jorge Castillo', position: 2, points: 95, events: 5, heats: 'Heat 5', lane: 2, schedule: '2:00 PM' },
            ],
            women: [
                { name: 'Lucía Martínez', position: 1, points: 99, events: 5, heats: 'Heat 6', lane: 1, schedule: '3:00 PM' },
                { name: 'Sara Mendoza', position: 2, points: 92, events: 5, heats: 'Heat 6', lane: 2, schedule: '3:00 PM' },
            ]
        }
    };

    function renderCategory(category, gender, containerId) {
        const container = document.getElementById(containerId);
        const participants = categories[category][gender];
        
        let tableHtml = `<table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Posición</th>
                                    <th>Nombre</th>
                                    <th>Puntaje</th>
                                </tr>
                            </thead>
                            <tbody>`;
        
        participants.forEach(participant => {
            tableHtml += `<tr>
                            <td>${participant.position}</td>
                            <td><a href="#" class="participant-link" data-category="${category}" data-gender="${gender}" data-name="${participant.name}">${participant.name}</a></td>
                            <td>${participant.points}</td>
                          </tr>`;
        });

        tableHtml += `  </tbody>
                        </table>`;
        
        container.innerHTML = tableHtml;
    }

    function renderAllCategories() {
        renderCategory('beginner', 'men', 'beginner-men');
        renderCategory('beginner', 'women', 'beginner-women');
        renderCategory('intermediate', 'men', 'intermediate-men');
        renderCategory('intermediate', 'women', 'intermediate-women');
        renderCategory('advanced', 'men', 'advanced-men');
        renderCategory('advanced', 'women', 'advanced-women');
    }

    function showParticipantDetails(category, gender, name) {
        const participant = categories[category][gender].find(p => p.name === name);
        const modalBody = document.querySelector('.modal-body');
        
        let detailsHtml = `<h6>Nombre:</h6> <p>${participant.name}</p>
                           <h6>Puntaje:</h6> <p>${participant.points}</p>
                           <h6>Eventos Realizados:</h6> <p>${participant.events}</p>
                           <h6>Heat:</h6> <p>${participant.heats}</p>
                           <h6>Carril:</h6> <p>${participant.lane}</p>
                           <h6>Horario:</h6> <p>${participant.schedule}</p>`;
        
        modalBody.innerHTML = detailsHtml;
        $('#participantModal').modal('show');
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('participant-link')) {
            event.preventDefault();
            const category = event.target.getAttribute('data-category');
            const gender = event.target.getAttribute('data-gender');
            const name = event.target.getAttribute('data-name');
            showParticipantDetails(category, gender, name);
        }
    });

    renderAllCategories();
});

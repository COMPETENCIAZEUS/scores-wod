document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo
    const categories = {
        beginner: {
            men: [
                {
                    name: 'Juan Pérez',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 1',
                    lane: 3,
                    schedule: '10:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '10:00 AM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'Carlos Díaz',
                    position: 2,
                    points: 0,
                    events: 0,
                    heats: 'Heat 1',
                    lane: 4,
                    schedule: '10:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '10:00 AM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
            ],
            women: [
                {
                    name: 'Ana López',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 2',
                    lane: 2,
                    schedule: '11:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '11:00 AM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'María Gómez',
                    position: 2,
                    points: 0,
                    events: 0,
                    heats: 'Heat 2',
                    lane: 3,
                    schedule: '11:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '11:00 AM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
            ]
        },
        intermediate: {
            men: [
                {
                    name: 'Luis Fernández',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 3',
                    lane: 1,
                    schedule: '12:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '12:00 PM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'Miguel Torres',
                    position: 2,
                    points: 0,
                    events: 0,
                    heats: 'Heat 3',
                    lane: 2,
                    schedule: '12:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 68, additionalInfo: '12:00 PM' },
                        { name: 'Evento 2', repetitions: 70, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 72, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 74, additionalInfo: 'SIN INFO' }
                    ]
                },
            ],
            women: [
                {
                    name: 'Laura Ramírez',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 4',
                    lane: 1,
                    schedule: '1:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 65, additionalInfo: '1:00 PM' },
                        { name: 'Evento 2', repetitions: 68, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 70, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 72, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'Elena Morales',
                    position: 2,
                    points: 0,
                    events: 0,
                    heats: 'Heat 4',
                    lane: 2,
                    schedule: '1:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '1:00 PM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
            ]
        },
        advanced: {
            men: [
                {
                    name: 'David Hernández',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 5',
                    lane: 1,
                    schedule: '2:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '2:00' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'Jorge Castillo',
                    position: 2,
                    points: 0,
                    events: 0,
                    heats: 'Heat 5',
                    lane: 2,
                    schedule: '2:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '2:00 PM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
            ],
            women: [
                {
                    name: 'Lucía Martínez',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 6',
                    lane: 1,
                    schedule: '3:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '3:00 PM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'Sara Mendoza',
                    position: 2,
                    points: 0,
                    events: 0,
                    heats: 'Heat 6',
                    lane: 2,
                    schedule: '3:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '3:00 PM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
            ]
        }
    };

    // Renderizar tablas por categoría y género
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

    // Renderizar todas las categorías
    function renderAllCategories() {
        renderCategory('beginner', 'men', 'beginner-men');
        renderCategory('beginner', 'women', 'beginner-women');
        renderCategory('intermediate', 'men', 'intermediate-men');
        renderCategory('intermediate', 'women', 'intermediate-women');
        renderCategory('advanced', 'men', 'advanced-men');
        renderCategory('advanced', 'women', 'advanced-women');
    }

    // Mostrar detalles del participante en un modal
    function showParticipantDetails(category, gender, name) {
        const participant = categories[category][gender].find(p => p.name === name);
        const modalBody = document.querySelector('.modal-body');
        
        let detailsHtml = `<h6>Nombre:</h6> <p>${participant.name}</p>
                           <h6>Puntaje:</h6> <p>${participant.points}</p>
                           <h6>Eventos Realizados:</h6> <p>${participant.events}</p>
                           <h6>Heat:</h6> <p>${participant.heats}</p>
                           <h6>Carril:</h6> <p>${participant.lane}</p>
                           <h6>Horario de proximo evento:</h6> <p>${participant.schedule}</p>`;
        
        participant.eventDetails.forEach((event, index) => {
            detailsHtml += `<h6>${event.name}:</h6>
                            <p>Repeticiones: ${event.repetitions}</p>
                            <p>Información Adicional: ${event.additionalInfo}</p>`;
        });

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


document.addEventListener('DOMContentLoaded', function() {
    // Datos de participantes hombres princpiantes
    const categories = {
        beginner: {
            men: [
                {
                    name: 'NAMELESS',
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
                    name: 'NAMELESS',
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

                {
                    name: 'NAMELESS',
                    position: 3,
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
                    name: 'NAMELESS',
                    position: 4,
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
                    name: 'NAMELESS',
                    position: 5,
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
                    name: 'NAMELESS',
                    position: 6,
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
                    name: 'NAMELESS',
                    position: 7,
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
                    name: 'NAMELESS',
                    position: 8,
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
                    name: 'NAMELESS',
                    position: 9,
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
                    name: 'NAMELESS',
                    position: 10,
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
            ],

            //datos de participantes mujeres principiantes

            women: [
                {
                    name: 'NAMELESS',
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
                    name: 'NAMELESS',
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

                {
                    name: 'NAMELESS',
                    position: 3,
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
                    name: 'NAMELESS',
                    position: 4,
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
                    name: 'NAMELESS',
                    position: 5,
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
                    name: 'NAMELESS',
                    position: 6,
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
                    name: 'NAMELESS',
                    position: 7,
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
                    name: 'NAMELESS',
                    position: 8,
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
                    name: 'NAMELESS',
                    position: 9,
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
                    name: 'NAMELESS',
                    position: 10,
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
            ]


            //datos de participantes hombres intermedios


        },
        intermediate: {
            men: [
                {
                    name: 'NAMELESS',
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
                    name: 'NAMELESS',
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
                {
                    name: 'NAMELESS',
                    position: 3,
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
                    name: 'NAMELESS',
                    position: 4,
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
                    name: 'NAMELESS',
                    position: 5,
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
                    name: 'NAMELESS',
                    position: 6,
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
                    name: 'NAMELESS',
                    position: 7,
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
                    name: 'NAMELESS',
                    position: 8,
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
                    name: 'NAMELESS',
                    position: 9,
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
                    name: 'NAMELESS',
                    position: 10,
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
            ],

                         //datos de participantes mujeres intermedios

            women: [
                {
                    name: 'NAMELESS',
                    position: 1,
                    points: 0,
                    events: 0,
                    heats: 'Heat 4',
                    lane: 1,
                    schedule: '1:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 0, additionalInfo: '1:00 PM' },
                        { name: 'Evento 2', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 3', repetitions: 0, additionalInfo: 'SIN INFO' },
                        { name: 'Evento 4', repetitions: 0, additionalInfo: 'SIN INFO' }
                    ]
                },
                {
                    name: 'NAMELESS',
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
                {
                    name: 'NAMELESS',
                    position: 3,
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
                {
                    name: 'NAMELESS',
                    position: 4,
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
                {
                    name: 'NAMELESS',
                    position: 5,
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
                {
                    name: 'NAMELESS',
                    position: 6,
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
                {
                    name: 'NAMELESS',
                    position: 7,
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
                {
                    name: 'NAMELESS',
                    position: 8,
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
                {
                    name: 'NAMELESS',
                    position: 9,
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
                {
                    name: 'NAMELESS',
                    position: 10,
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

         //datos de participantes hombres avanzados 
        advanced: {
            men: [
                {
                    name: 'NAMELESS',
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
                    name: 'NAMELESS',
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
                {
                    name: 'NAMELESS',
                    position: 3,
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
                    name: 'NAMELESS',
                    position: 4,
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
                    name: 'NAMELESS',
                    position: 5,
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
                    name: 'NAMELESS',
                    position: 6,
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
                    name: 'NAMELESS',
                    position: 7,
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
                    name: 'NAMELESS',
                    position: 8,
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
                    name: 'NAMELESS',
                    position: 9,
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
                    name: 'NAMELESS',
                    position: 10,
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
            ],


            //datos de participantes mujeres avanazdos 

            women: [
                {
                    name: 'NAMELESS',
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
                    name: 'NAMELESS',
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
                {
                    name: 'NAMELESS',
                    position: 3,
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
                    name: 'NAMELESS',
                    position: 4,
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
                    name: 'NAMELESS',
                    position: 5,
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
                    name: 'NAMELESS',
                    position: 6,
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
                    name: 'NAMELESS',
                    position: 7,
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
                    name: 'NAMELESS',
                    position: 8,
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
                    name: 'NAMELESS',
                    position: 9,
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
                    name: 'NAMELESS',
                    position: 10,
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
            ]
        }
    };

    // Renderizar tablas por categoría y género
   // Renderizar tablas por categoría y género
function renderCategory(category, gender, containerId) {
    const container = document.getElementById(containerId);
    let participants = categories[category][gender];

    // Ordenar participantes por puntaje (de mayor a menor)
    participants.sort((a, b) => b.points - a.points);
    
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
                            <p>Datos extra y horario: ${event.additionalInfo}</p>`;
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

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('orientation-overlay').style.display = 'flex';
    } else {
        document.getElementById('orientation-overlay').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// Llamar a la función para verificar la orientación inicial
checkOrientation();

// Función para mostrar un mensaje en el contenedor
function showMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = `<p>${message}</p>`;
    messageContainer.classList.add('show'); // Mostrar el contenedor del mensaje
}

// Ejemplo de uso
showMessage('¡Hola! Bienvenido a nuestra aplicación.');


 // Verificar si el dispositivo es móvil
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    // Mostrar mensaje de orientación horizontal en dispositivos móviles
    function showOrientationMessage() {
        if (isMobileDevice()) {
            const orientationMessage = document.createElement('div');
            orientationMessage.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); color: #fff; display: flex; justify-content: center; align-items: center; font-size: 24px;">
                    Por favor, gire su dispositivo en horizontal para una mejor experiencia.
                </div>
            `;
            document.body.appendChild(orientationMessage);
            
            // Verificar la orientación actual y ocultar el mensaje cuando el dispositivo esté en horizontal
            window.addEventListener('orientationchange', function() {
                if (window.orientation === 0 || window.orientation === 180) {
                    orientationMessage.style.display = 'none';
                } else {
                    orientationMessage.style.display = 'flex';
                }
            });

            // Ocultar el mensaje si el dispositivo ya está en horizontal
            if (window.orientation === 0 || window.orientation === 180) {
                orientationMessage.style.display = 'none';
            } else {
                orientationMessage.style.display = 'flex';
            }
        }
    }

    // Llamar a la función para mostrar el mensaje de orientación
    showOrientationMessage();
});


        // Récupérer le bouton et le conteneur
        const button = document.getElementById('Historique1');
        const container = document.getElementById('historique-container');
        const bodyContent = document.querySelector('.container'); // Sélectionne le contenu à cacher (tout ce qui est dans container)
    
        // Ajouter un gestionnaire d'événement pour le bouton
        button.addEventListener('click', function() {
            // Masquer tout le contenu de la page (sauf le conteneur)
            bodyContent.classList.add('hidden');

            // Utiliser fetch pour charger le contenu de la page 'Afficher_historique.html'
            fetch('Afficher_historique.html')
                .then(response => response.text())
                .then(data => {
                    // Insérer le contenu dans le conteneur
                    container.innerHTML = data;

                    // Ne garder que le div avec l'ID 'dev1' chargé depuis Afficher_historique.html
                    const divContent = container.querySelector('#dev1');
                    container.innerHTML = ''; // On vide le conteneur
                    container.appendChild(divContent); // On affiche uniquement le div `dev1`
                })
                .catch(error => {
                    console.error('Erreur lors du chargement de la page :', error);
                });
        });
    
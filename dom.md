## Événements JavaScript courants

### DOMContentLoaded

- **Fonctionnalité :** L'événement "DOMContentLoaded" se déclenche lorsque la page HTML a été complètement chargée, y compris tous les styles, images et ressources. Cela signifie que votre JavaScript peut commencer à s'exécuter sans craindre que certains éléments de la page ne soient pas encore disponibles. C'est très utile pour l'initialisation de votre code JavaScript sur une page web.

### click

- **Fonctionnalité :** L'événement "click" se déclenche lorsque l'utilisateur clique sur un élément, comme un bouton, un lien, ou n'importe quel élément interactif. Vous pouvez l'utiliser pour ajouter des fonctionnalités aux éléments lorsque l'utilisateur clique dessus.

### mouseenter

- **Fonctionnalité :** L'événement "mouseenter" se déclenche lorsque le curseur de la souris entre dans un élément. Il est utile pour ajouter des effets ou des actions lorsqu'un utilisateur survole un élément.

### mouseleave

- **Fonctionnalité :** L'événement "mouseleave" se déclenche lorsque le curseur de la souris quitte un élément. Il peut être utilisé pour restaurer l'état initial d'un élément lorsque l'utilisateur cesse de le survoler.

### keydown

- **Fonctionnalité :** L'événement "keydown" se déclenche lorsqu'une touche du clavier est enfoncée. Il est souvent utilisé pour détecter les entrées clavier de l'utilisateur.

### keyup

- **Fonctionnalité :** L'événement "keyup" se déclenche lorsque l'utilisateur relâche une touche du clavier. Il peut être utilisé pour réagir aux actions de l'utilisateur après avoir relâché une touche.

### submit

- **Fonctionnalité :** L'événement "submit" se déclenche lorsqu'un formulaire est soumis. Vous pouvez l'utiliser pour valider les données du formulaire ou effectuer d'autres actions lorsqu'un utilisateur envoie un formulaire.

### focus

- **Fonctionnalité :** L'événement "focus" se déclenche lorsque l'élément reçoit le focus, généralement à travers un clic ou une tabulation. Il est utile pour déclencher des actions lorsqu'un élément devient actif.

### blur

- **Fonctionnalité :** L'événement "blur" se déclenche lorsque l'élément perd le focus, par exemple lorsque l'utilisateur clique en dehors de l'élément ou tabule vers un autre élément.

### load

- **Fonctionnalité :** L'événement "load" se déclenche lorsque la page web entière est chargée, y compris les ressources externes telles que les images, les feuilles de style et les scripts. Il est utilisé pour des tâches d'initialisation globale de la page.

---

## Méthodes `getElementBy` en JavaScript

Les méthodes suivantes sont utilisées pour accéder aux éléments HTML dans une page web en JavaScript :

### `getElementById()`

- **Fonctionnalité :** Cette méthode permet de récupérer un élément HTML en utilisant son attribut `id`. Elle renvoie l'élément correspondant à l'`id` spécifié.

### `getElementsByClassName()`

- **Fonctionnalité :** Cette méthode permet de récupérer un ensemble d'éléments HTML en utilisant leur classe CSS. Elle renvoie une collection d'éléments correspondant à la classe spécifiée.

### `getElementsByTagName()`

- **Fonctionnalité :** Cette méthode permet de récupérer un ensemble d'éléments HTML en utilisant leur balise HTML. Elle renvoie une collection d'éléments correspondant à la balise spécifiée.

### `querySelector()`

- **Fonctionnalité :** Cette méthode permet de récupérer le premier élément HTML correspondant à un sélecteur CSS spécifié. Elle renvoie l'élément correspondant ou `null` s'il n'y en a aucun.

### `querySelectorAll()`

- **Fonctionnalité :** Cette méthode permet de récupérer tous les éléments HTML correspondant à un sélecteur CSS spécifié. Elle renvoie une collection de tous les éléments correspondants.

### `getElementByName()` (utilisé principalement avec les formulaires)

- **Fonctionnalité :** Cette méthode permet de récupérer un ensemble d'éléments de formulaire HTML en utilisant leur attribut `name`. Elle renvoie une collection d'éléments correspondant à l'attribut `name` spécifié.

Ces méthodes sont essentielles pour accéder, manipuler et interagir avec les éléments HTML dans vos scripts JavaScript. Choisissez la méthode appropriée en fonction de vos besoins et de la structure de votre page web.

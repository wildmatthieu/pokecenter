# Pokecenter

Une application pour gérer la plateforme web utilisée par le centre de soin pokemon situé dans la petite ville de Jadielle.

Le code de ce repo se base sur le un monorepo JS qui suit l'architecture React-Express-MySQL telle qu'enseignée à la Wild Code School (v7.1.7)

## Information sur la branche "reponses_utilisation-contexte-simple"

Le but est d'afficher dans le backoffice les informations (parfois sensibles) des salariés du centre pokemon. Cela se fait en deux étapes principales : 
- Dans la première étape (premier commit), nous ajoutons les salariés directement dans un composant coté backoffice pour afficher les informations. Aucun context n'est nécessaire pour cela
- Dans la seconde étape (second commit), nous décidons de gérer les informations des employés dans un contexte afin que ces dernières soient utilisables dans tout l'espace backoffice (et seulement l'espace backoffice)
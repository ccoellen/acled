# Méthodologie

## Sources
Il existe 4 types de sources :
1. Médias traditionnels, c'est-à -dire les médias nationaux, régionaux et internationaux régis par les principes journalistiques de vérification.
2. Rapports des organismes internationaux et des ONG. Sous certaines conditions, les rapports des groupes impliqués dans le conflit peuvent également être inclus.
3. Partenaires locaux qui collectent des informations « sur le terrain ».
4. Nouveaux médias tels que Twitter, Telegram ou même WhatsApp. ACLED adopte une approche ciblée en établissant des relations directes avec les sources.

## Collecte des informations
Dans un premier temps, ACLED crée une première liste de sources basée sur des sources populaires dans chaque pays. ACLED embauche des chercheurs ayant des compétences linguistiques pertinentes ainsi qu'une connaissance du contexte local dans l’objectif de cultiver cette liste. Ainsi, cette liste est par la suite complétée avec des rapports d’ONG qui opèrent dans la région et des comptes de médias sociaux vérifiés, par exemple. 
La viabilité des sources est évaluée à travers l'expertise de partenaires locaux, d'experts nationaux, d'organisations locales ou d'universités de la région.
Chaque source se voit attribuer une valeur afin de développer la variable SOURCE_SCALE. Ceci est ensuite utilisé pour déterminer le profil de chaque pays et voir quelle(s) source(s) ont tendance à couvrir certaines régions ou certains types de conflits et identifier les biais. Cela permet d’établir, une stratégie d'approvisionnement spécifique au pays est développée pour aider à combler les lacunes de chaque source.
 
## Codage
Lorsqu'un rapport ne précise pas si des décès se sont produits, ACLED attribue automatiquement l'estimation à 0 décès.  Par ailleurs, ACLED fait la distinction entre les « décès (fatalities) » et les « victimes (casualties) » et ne comptabilise que les décès (fatalities).  Par conséquent, si un rapport n'indique que des « victimes », ACLED assumera que tous les décès sont des blessés et codera donc 0 décès.
 
Par ailleurs, si le rapport inclut une estimation telle que « dizaines » ou « centaines », ACLED s'appuie sur l'estimation la plus prudente, à savoir 10 pour « dizaines » ou encore 100 pour « centaines ».
 
Lorsqu'un rapport indique qu'un incident a effectivement entraîné des décès mais ne fournit pas le nombre, ACLED détermine ce dernier à travers un processus standardisé:
1. Attaque + zone de guerre = 10 décès. Par exemple : une frappe aérienne sur un immeuble en Irak.
2. Attaque à petite échelle + zone de guerre = 3 décès. Par exemple : une bombe à un point de contrôle (qui a tendance à être occupé par peu de personnes) au Mali.
3. Attaque + hors zone de guerre = 3 décès. Par exemple : violences au Soudan.
4. Attaque à grande échelle + hors zone de guerre = 10 décès. Par exemple : attaque de grande ampleur de Boko Haram au Nigeria.

Il est important de noter qu’ACLED définit un pays comme « en guerre » si un seul groupe ou coalition tente de contester violemment la légitimité et l'autorité du gouvernement central, et que ce même groupe est actif dans plus de 20 % du pays.

![Screenshot (154)](https://user-images.githubusercontent.com/118550105/202865176-5e1ee864-c307-45f1-ab82-af269f6e3a31.png)

![Screenshot (158)](https://user-images.githubusercontent.com/118550105/202865307-7a452cea-a4da-411a-88d9-ee206b7bcdac.png)


![Screenshot (156)](https://user-images.githubusercontent.com/118550105/202865185-0dbb6180-ae5a-438a-ac4f-fcd5acd21f0d.png)

Cependant, il y a également certains pays qui, bien que n'étant pas « en guerre », connaissent une violence importante. Ainsi, alors qu'un nombre inconnu de décès dans ces pays sont, en moyenne, codés par 3 décès, certains évènements dans ces pays peuvent être suffisamment violents pour justifier un codage de 10 décès.

![Screenshot (157)](https://user-images.githubusercontent.com/118550105/202865207-7ccb37dc-244f-4658-80cf-255c5aea816f.png)

## Atténuer les biais

ACLED estime que la seule augmentation du nombre de sources ne résout pas les biais, cela ne fait que reproduire ces tendances à plus grande échelle, en les exacerbant ainsi et les faisant persister sur le long terme. En d'autres termes, la quantité d'informations ne garantit pas la qualité.

Les médias traditionnels, par exemple, ont un certain nombre de biais connus qui faussent l’information lorsqu'ils sont considérés comme le seul type de source. Premièrement, il existe certains endroits éloignés ou dangereux où les reporters ne peuvent pas ou ne veulent pas se rendre. Deuxièmement, ces sources ont tendance à se concentrer sur des événements « sensationnels », ignorant ceux de moindre envergure ou les conflits prolongés qui manquent de changements majeurs. Ces biais découlent d'un certain nombre de limitations rencontrées par les médias traditionnels, telles que l'attention des lecteurs et le processus de vérification de l'information, entre autres. C’est pourquoi, ACLED crée des procédures d'approvisionnement spécifiques aux régions et aux pays. L'objectif est de produire des combinaisons de sources qui décrivent avec précision le taux de mortalité de chaque pays.

De plus, ACLED a mis en place quatre mécanismes pour assurer une surveillance continue des sources et de la qualité des données :

1. Contrôle des sources : chaque semaine, les chercheurs d’ACLED examinent des milliers de sources dans plusieurs langues et utilisent un système traçant le nombre de citations par source et distribution géographique pour éviter l’oubli de sources. Par ailleurs, les sources qui s'avèrent improductives sont retirées de la liste.
2. Identification continue de nouvelles sources : de nouvelles sources sont testées chaque semaine et ajoutées à la liste des sources que les chercheurs suivent. Pour s'assurer que les ajouts de nouvelles sources n'introduisent pas de pic artificiel dans les tendances, un codage supplémentaire est entrepris pour examiner et coder cette source pour les périodes passées.
3. Corrections : les statistiques sont régulièrement mises à jour pour refléter les faits les plus récents, ACLED est une base de données « en direct » dans ce sens.
4. Anonymisation : certains partenaires locaux peuvent demander à rester anonymes pour des raisons de sécurité, les événements codés à partir des rapports de ces partenaires sont attribués dans les données en tant que "source locale".


/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreSyllabes = document.getElementById('titre-syllabes');

var mots = [];

var mots_en_s_son_s = ['histoire', 'ours', 'soleil', 'escalier', 'souris', 'sac', 'masque', 'sucre', 'salade', 'course', 'veste', 
'salle', 'sapin', 'piste', 'réponse', 'poste', 'chanson', 'triste'];
var mots_s_son_z = ['maison', 'oiseau', 'télévision', 'besoin', 'cuisine', 'musique', 'chose', 'chemise', 'rose', 
'poser', 'surprise', 'chaise', 'magasin', 'valise', 'visage', 'vase', 'pelouse', 'fusée'];
var mots_ss = ['aussi', 'poisson', 'passer', 'dessin', 'classe', 'grosse', 's\'asseoir', 'maîtresse', 'assez', 'pousser', 'glisser', 
'laisser', 'chaussure', 'hérisson', 'caisse', 'aussitôt', 'mousse', 'casser'];
var mots_z = ['zoo', 'zèbre', 'bizarre', 'onze', 'douze', 'zéro', 'lézard', 'gazon', 'quinze', 'bazar', 
'trapèze', 'seize', 'gaz', 'gazelle', 'zouave', 'zigzag', 'zébu', 'zone'];

var sons = ['mots en s [s]', 'mots en s [z]', 'mots en ss', 'mots en z'];
var lesBases = [mots_en_s_son_s, mots_s_son_z, mots_ss, mots_z];

/*****************************
 * Fonction de creation html *
 *****************************/
function createNewInput (base, bases, name, btns) {
	for (let i=0; i<base.length; i++) {
		var newDivSonsBases = document.createElement('div');
		newDivSonsBases.id = base[i];
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		var newLabel = document.createElement('label');
		newLabel.htmlFor = base[i];
		newLabel.appendChild(document.createTextNode(base[i]));
		newDivSonsBases.appendChild(newInput);
		newDivSonsBases.appendChild(newLabel);
		var newButtonDiv = document.createElement('div');
		var newButton = document.createElement("BUTTON");
		newButton.innerHTML = "Voir la liste";
		newButton.onclick = 'afficher(base[i])';
		newButton.addEventListener ("click", function() {
			afficher(bases[i]);});
		newButtonDiv.appendChild(newButton);
		var newDivBox = document.createElement('div');
		newDivBox.id = 'box';
		newDivBox.appendChild(newDivSonsBases);
		newDivBox.appendChild(newButtonDiv);
		document.getElementById(name).appendChild(newDivBox);		
	}	
}

createNewInput(sons, lesBases, 'input_bases', 'buttons');

/**************************
 *  FONCTION DE SÉLECTION *
 **************************/

function selectSons (sons, lesBases, mots) {
	for (let i=0; i<sons.length; i++) {
		const x = document.getElementById(sons[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				for (j=0; j<lesBases[i].length; ++j) {
					mots.push(lesBases[i][j]);
					}
					melanger(mots);
			} else {
				for (j=0; j<lesBases[i].length; ++j) {
					const index = mots.indexOf(lesBases[i][j]);
					mots.splice(index, 1);				
				}
				melanger(mots);
			}
		});
	}
}

selectSons(sons, lesBases, mots);

/*******************************************************
 *  FONCTION DE MELANGE ET DE MISE À ZÉRO *
 *******************************************************/

function melanger(donnees) {		
	affichageMelange.textContent = " ";
	if (donnees.length == 0) {
		}
		else {
			for (compteur=0; compteur < 20; compteur +=1) {
				var lettreAleatoire = Math.floor(Math.random() * donnees.length);
				affichageMelange.textContent += donnees[lettreAleatoire] + ", ";}
		}	
}

function afficher(donnees) {		
	affichageMelange.textContent = " ";
	for (compteur=0; compteur <donnees.length; compteur +=1) {
		affichageMelange.textContent += donnees[compteur] + ", ";}
	}

function aide() {
	affichageMelange.textContent = "Cocher une liste pour l'ajouter au mélange. 20 mots au total sont mélangés à partir des listes cochées. Cliquez les boutons \"voir la liste\" pour afficher tous les mots contenus dans une liste.";
	}

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageMelange.textContent = " ";
	mots.splice(0, mots.length);
}

function All(sons, lesBases, mots) {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = true; }
	affichageMelange.textContent = " ";
	
	for (let i=0; i<sons.length; i++) {
		for (j=0; j<lesBases[i].length; ++j) {
			mots.push(lesBases[i][j]);
			}
		}
		melanger(mots);
}

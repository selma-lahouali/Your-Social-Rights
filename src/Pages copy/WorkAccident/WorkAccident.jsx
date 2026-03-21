import { useState } from "react";

export default function WorkAccident() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  const [question9, setQuestion9] = useState(false);
  const [question10, setQuestion10] = useState(false);
  const [question11, setQuestion11] = useState(false);
  const [question12, setQuestion12] = useState(false);
  const [question13, setQuestion13] = useState(false);
  const [question14, setQuestion14] = useState(false);
  const [question15, setQuestion15] = useState(false);
  const [question16, setQuestion16] = useState(false);
  return (
    <div className="container">
      <h2 className="main-title">Assurance maladie (CNAS)</h2>
      {/* 1st question */}
      <div className="section">
        <h3
          className={`question ${question1 ? "open" : ""}`}
          onClick={() => setQuestion1(!question1)}
        >
          Si je tombe malade, est-ce que je peux bénéficier de prestations de
          l’assurance maladie ?
          <span className="dropdown-arrows">{question1 ? "▲" : "▼"}</span>
        </h3>
        {question1 && (
          <div className="answer">
            <p>
              Oui. Si vous remplissez les conditions d’ouverture des droits,
              vous pouvez bénéficier de deux types de prestations :
            </p>
            <ul className="step-list">
              <li className="step">
                des <span>prestations en nature</span> (prise en charge des
                soins médicaux pour vous et vos ayants droit) ;
              </li>
              <li className="step">
                des <span>prestations en espèces</span> (indemnité journalière
                lorsque vous êtes contraint d’interrompre temporairement votre
                travail pour cause de maladie).
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 2nd question */}
      <div className="section">
        <h3
          className={`question ${question2 ? "open" : ""}`}
          onClick={() => setQuestion2(!question2)}
        >
          Quels types de soins peuvent être pris en charge si je suis malade ?
          <span className="dropdown-arrows">{question2 ? "▲" : "▼"}</span>
        </h3>
        {question2 && (
          <div className="answer">
            <p>
              Si vous êtes assuré, vous pouvez bénéficier de la prise en charge
              de plusieurs types de frais, notamment :
            </p>
            <ul className="step-list">
              <li className="step">
                des <span>prestations en nature</span> (prise en charge des
                soins médicaux pour vous et vos ayants droit) ;
              </li>
              <li className="step">Soins médicaux et chirurgicaux</li>
              <li className="step">Médicaments</li>
              <li className="step">Hospitalisation</li>
              <li className="step">Examens biologiques et radiologiques</li>
              <li className="step">Soins et prothèses dentaires</li>
              <li className="step">Optique médicale</li>
              <li className="step">Cures thermales ou spécialisées</li>
              <li className="step">Appareillage et prothèses</li>
              <li className="step">
                Rééducation fonctionnelle et réadaptation professionnelle
              </li>
              <li className="step">
                transport sanitaire lorsque votre état de santé le nécessite.
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 3rd question */}
      <div className="section">
        <h3
          className={`question ${question3 ? "open" : ""}`}
          onClick={() => setQuestion3(!question3)}
        >
          Si je dois me déplacer pour un contrôle médical demandé par la
          sécurité sociale, est- ce que mes frais de déplacement peuvent être
          remboursés ?
          <span className="dropdown-arrows">{question3 ? "▲" : "▼"}</span>
        </h3>
        {question3 && (
          <div className="answer">
            <p>
              Oui. Si vous êtes convoqué pour un contrôle médical ou si votre
              traitement doit être effectué dans un établissement situé hors de
              votre lieu de résidence, vos frais de déplacement peuvent être
              pris en charge dans les conditions prévues par la réglementation.
            </p>
          </div>
        )}
      </div>
      {/* 4th question */}
      <div className="section">
        <h3
          className={`question ${question4 ? "open" : ""}`}
          onClick={() => setQuestion4(!question4)}
        >
          Si je reçois des soins sans prescription médicale, est-ce que je peux
          quand même être remboursé ?
          <span className="dropdown-arrows">{question4 ? "▲" : "▼"}</span>
        </h3>
        {question4 && (
          <div className="answer">
            <p>
              Non. Pour que vous puissiez bénéficier des prestations de
              l’assurance maladie, les soins doivent être prescrits par un
              médecin ou par une personne habilitée conformément à la
              réglementation.
            </p>
          </div>
        )}
      </div>
      {/* 5th question */}
      <div className="section">
        <h3
          className={`question ${question5 ? "open" : ""}`}
          onClick={() => setQuestion5(!question5)}
        >
          Si j’ai besoin d’une prothèse dentaire, est-ce qu’elle sera toujours
          prise en charge ?
          <span className="dropdown-arrows">{question5 ? "▲" : "▼"}</span>
        </h3>
        {question5 && (
          <div className="answer">
            <p>
              Non. Les prothèses dentaires ne sont prises en charge que
              lorsqu’elles ont un objectif
              <span>fonctionnel ou thérapeutique</span>, ou lorsqu’elles sont
              nécessaires à l’exercice de certaines professions prévues par la
              réglementation.
            </p>
          </div>
        )}
      </div>
      {/* 6th question */}
      <div className="section">
        <h3
          className={`question ${question6 ? "open" : ""}`}
          onClick={() => setQuestion6(!question6)}
        >
          Si mon traitement dure longtemps, est-ce que la prise en charge des
          soins a une durée limitée ?
          <span className="dropdown-arrows">{question6 ? "▲" : "▼"}</span>
        </h3>
        {question6 && (
          <div className="answer">
            <p>
              Non. Si vous remplissez les conditions d’ouverture des droits au
              moment des soins, vous pouvez bénéficier des prestations en nature
              <span>sans limitation de durée</span> .
            </p>
          </div>
        )}
      </div>
      {/* 7th question */}
      <div className="section">
        <h3
          className={`question ${question7 ? "open" : ""}`}
          onClick={() => setQuestion7(!question7)}
        >
          Dans quel délai dois-je transmettre mon dossier médical à la sécurité
          sociale ?
          <span className="dropdown-arrows">{question7 ? "▲" : "▼"}</span>
        </h3>
        {question7 && (
          <div className="answer">
            <p>
              Vous devez présenter votre dossier médical dans un délai de
              <span>trois mois après le premier acte médical</span> .
            </p>
            <p>
              Si votre traitement est continu, vous devez le présenter
              <span>dans les trois mois suivant la fin du traitement</span> .
            </p>
            <p>
              Le non-respect de ce délai peut entraîner la perte du droit aux
              prestations pour la période concernée, sauf cas de force majeure.
            </p>
          </div>
        )}
      </div>
      {/* 8th question */}
      <div className="section">
        <h3
          className={`question ${question8 ? "open" : ""}`}
          onClick={() => setQuestion8(!question8)}
        >
          Si je suis en arrêt maladie et que je ne peux pas travailler, est-ce
          que je reçois une indemnité ?
          <span className="dropdown-arrows">{question8 ? "▲" : "▼"}</span>
        </h3>
        {question8 && (
          <div className="answer">
            <p>
              Oui. Si votre incapacité de travail est médicalement constatée,
              vous pouvez percevoir une indemnité journalière :
            </p>
            <ul className="step-list">
              <li className="step">
                des <span>prestations en nature</span> (prise en charge des
                soins médicaux pour vous et vos ayants droit) ;
              </li>
              <li className="step">
                <span>
                  50 % de votre salaire journalier net du 1er au 15ᵉ jour
                  d’arrêt
                </span>
              </li>
              <li className="step">
                <span>100 % à partir du 16ᵉ jour d’arrêt</span> .
              </li>
              <li className="step">
                En cas de
                <span>maladie de longue durée ou d’hospitalisation</span>, vous
                pouvez percevoir<span>100 % dès le premier jour d’arrêt</span> .
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 9th question */}
      <div className="section">
        <h3
          className={`question ${question9 ? "open" : ""}`}
          onClick={() => setQuestion9(!question9)}
        >
          Comment est calculée l’indemnité journalière que je peux recevoir ?
          <span className="dropdown-arrows">{question9 ? "▲" : "▼"}</span>
        </h3>
        {question9 && (
          <div className="answer">
            <p>
              L’indemnité est versée pour chaque jour d’arrêt de travail et elle
              ne peut pas dépasser
              <span>
                le trentième (1/30) de votre salaire mensuel servant de base au
                calcul des cotisations sociales
              </span>
              .
            </p>
          </div>
        )}
      </div>
      {/* 10th question */}
      <div className="section">
        <h3
          className={`question ${question10 ? "open" : ""}`}
          onClick={() => setQuestion10(!question10)}
        >
          Pendant combien de temps puis-je recevoir l’indemnité journalière ?
          <span className="dropdown-arrows">{question10 ? "▲" : "▼"}</span>
        </h3>
        {question10 && (
          <div className="answer">
            <p>
              Vous pouvez percevoir l’indemnité pendant une durée maximale de
              <span>trois ans</span> :
            </p>
            <ul className="step-list">
              <li className="step">
                pour une <span>une maladie de longue durée</span>,ce délai est
                calculé pour chaque affection.
              </li>
              <li className="step">
                pour les autres maladies, vous pouvez recevoir
                <span>
                  au maximum 300 indemnités journalières sur une période de deux
                  ans consécutifs .
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 11th question */}
      <div className="section">
        <h3
          className={`question ${question11 ? "open" : ""}`}
          onClick={() => setQuestion11(!question11)}
        >
          Si je reprends le travail progressivement pour améliorer mon état de
          santé, est-ce que je peux continuer à percevoir une indemnité ?
          <span className="dropdown-arrows">{question11 ? "▲" : "▼"}</span>
        </h3>
        {question11 && (
          <div className="answer">
            <p>
              Oui. Si la reprise du travail favorise l’amélioration de votre
              état de santé ou si vous suivez une rééducation ou une
              réadaptation professionnelle, l’organisme de sécurité sociale peut
              maintenir tout ou partie de votre indemnité journalière.
            </p>
            <p>
              Cette prolongation ne peut pas dépasser
              <span>un an au-delà du délai de trois ans prévu par la loi.</span>
            </p>
          </div>
        )}
      </div>
      {/* 12th question */}
      <div className="section">
        <h3
          className={`question ${question12 ? "open" : ""}`}
          onClick={() => setQuestion12(!question12)}
        >
          Dois-je déclarer ma maladie à la sécurité sociale pour bénéficier de
          l’indemnité journalière ?
          <span className="dropdown-arrows">{question12 ? "▲" : "▼"}</span>
        </h3>
        {question12 && (
          <div className="answer">
            <p>
              Oui. Vous devez déclarer votre maladie dans le délai prévu par la
              réglementation. Si cette déclaration n’est pas faite, vous pouvez
              perdre votre droit aux indemnités journalières pour la période
              concernée.
            </p>
          </div>
        )}
      </div>
      {/* 13th question */}
      <div className="section">
        <h3
          className={`question ${question13 ? "open" : ""}`}
          onClick={() => setQuestion13(!question13)}
        >
          Si mon arrêt maladie dure longtemps, est-ce que je dois me soumettre à
          des contrôles médicaux ?
          <span className="dropdown-arrows">{question13 ? "▲" : "▼"}</span>
        </h3>
        {question13 && (
          <div className="answer">
            <p>
              Oui. Si votre maladie dure longtemps ou nécessite des soins
              continus pendant plus de six mois, vous devez vous soumettre aux
              examens médicaux demandés par l’organisme de sécurité sociale et
              suivre les traitements prescrits.
            </p>
            <p>
              Le non-respect de ces obligations peut entraîner la suspension ou
              la suppression des prestations.
              <br />
              (Art. 19)
            </p>
          </div>
        )}
      </div>
      {/* 14th question */}
      <div className="section">
        <h3
          className={`question ${question14 ? "open" : ""}`}
          onClick={() => setQuestion14(!question14)}
        >
          Comment savoir si ma maladie est considérée comme une maladie de
          longue durée ?
          <span className="dropdown-arrows">{question14 ? "▲" : "▼"}</span>
        </h3>
        {question14 && (
          <div className="answer">
            <p>
              Vous devez vous référer à la liste officielle des affections de
              longue durée fixée par voie réglementaire par les autorités
              compétentes.
            </p>
          </div>
        )}
      </div>
      {/* 15th question */}
      <div className="section">
        <h3
          className={`question ${question15 ? "open" : ""}`}
          onClick={() => setQuestion15(!question15)}
        >
          Si mon salaire évolue, est-ce que mon indemnité journalière peut être
          revalorisée ?
          <span className="dropdown-arrows">{question15 ? "▲" : "▼"}</span>
        </h3>
        {question15 && (
          <div className="answer">
            <p>
              Oui. Votre indemnité journalière peut être revalorisée en fonction
              de l’évolution de votre salaire de poste.
              <br /> (Art. 21)
            </p>
          </div>
        )}
      </div>
      {/* 16th question */}
      <div className="section">
        <h3
          className={`question ${question16 ? "open" : ""}`}
          onClick={() => setQuestion16(!question16)}
        >
          Existe-t-il un montant minimum pour l’indemnité journalière lorsque je
          reçois 100 % ?
          <span className="dropdown-arrows">{question16 ? "▲" : "▼"}</span>
        </h3>
        {question16 && (
          <div className="answer">
            <p>
              Oui. Lorsque l’indemnité est versée au taux de 100 %, son montant
              ne peut pas être inférieur à
              <span>
                huit fois le taux horaire net du salaire national minimum
                garanti (SNMG).
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

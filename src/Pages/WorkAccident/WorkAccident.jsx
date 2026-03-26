import { useState } from "react";

export default function WorkAccident() {
  const [openQuestion, setOpenQuestion] = useState({});
  const toggleQuestion = (key) => {
    setOpenQuestion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="container">
      <h2 className="main-title">Assurance maladie (CNAS)</h2>
      {/* 1st question */}
      <div className="section">
        <h3
          className={`question ${openQuestion[1] ? "open" : ""}`}
          onClick={() => toggleQuestion(1)}
        >
          Si je tombe malade, est-ce que je peux bénéficier de prestations de
          l’assurance maladie ?
          <span className="dropdown-arrows">{openQuestion[1] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[1] && (
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
          className={`question ${openQuestion[2] ? "open" : ""}`}
          onClick={() => toggleQuestion(2)}
        >
          Quels types de soins peuvent être pris en charge si je suis malade ?
          <span className="dropdown-arrows">{openQuestion[2] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[2] && (
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
          className={`question ${openQuestion[3] ? "open" : ""}`}
          onClick={() => toggleQuestion(3)}
        >
          Si je dois me déplacer pour un contrôle médical demandé par la
          sécurité sociale, est- ce que mes frais de déplacement peuvent être
          remboursés ?
          <span className="dropdown-arrows">{openQuestion[3] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[3] && (
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
          className={`question ${openQuestion[4] ? "open" : ""}`}
          onClick={() => toggleQuestion(4)}
        >
          Si je reçois des soins sans prescription médicale, est-ce que je peux
          quand même être remboursé ?
          <span className="dropdown-arrows">{openQuestion[4] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[4] && (
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
          className={`question ${openQuestion[5] ? "open" : ""}`}
          onClick={() => toggleQuestion(5)}
        >
          Si j’ai besoin d’une prothèse dentaire, est-ce qu’elle sera toujours
          prise en charge ?
          <span className="dropdown-arrows">{openQuestion[5] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[5] && (
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
          className={`question ${openQuestion[6] ? "open" : ""}`}
          onClick={() => toggleQuestion(6)}
        >
          Si mon traitement dure longtemps, est-ce que la prise en charge des
          soins a une durée limitée ?
          <span className="dropdown-arrows">{openQuestion[6] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[6] && (
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
          className={`question ${openQuestion[7] ? "open" : ""}`}
          onClick={() => toggleQuestion(7)}
        >
          Dans quel délai dois-je transmettre mon dossier médical à la sécurité
          sociale ?
          <span className="dropdown-arrows">{openQuestion[7] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[7] && (
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
          className={`question ${openQuestion[8] ? "open" : ""}`}
          onClick={() => toggleQuestion(8)}
        >
          Si je suis en arrêt maladie et que je ne peux pas travailler, est-ce
          que je reçois une indemnité ?
          <span className="dropdown-arrows">{openQuestion[8] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[8] && (
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
          className={`question ${openQuestion[9] ? "open" : ""}`}
          onClick={() => toggleQuestion(9)}
        >
          Comment est calculée l’indemnité journalière que je peux recevoir ?
          <span className="dropdown-arrows">{openQuestion[9] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[9] && (
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
          className={`question ${openQuestion[10] ? "open" : ""}`}
          onClick={() => toggleQuestion(10)}
        >
          Pendant combien de temps puis-je recevoir l’indemnité journalière ?
          <span className="dropdown-arrows">{openQuestion[10] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[10] && (
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
          className={`question ${openQuestion[11] ? "open" : ""}`}
          onClick={() => toggleQuestion(11)}
        >
          Si je reprends le travail progressivement pour améliorer mon état de
          santé, est-ce que je peux continuer à percevoir une indemnité ?
          <span className="dropdown-arrows">{openQuestion[11] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[11] && (
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
          className={`question ${openQuestion[12] ? "open" : ""}`}
          onClick={() => toggleQuestion(12)}
        >
          Dois-je déclarer ma maladie à la sécurité sociale pour bénéficier de
          l’indemnité journalière ?
          <span className="dropdown-arrows">{openQuestion[12] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[12] && (
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
          className={`question ${openQuestion[13] ? "open" : ""}`}
          onClick={() =>toggleQuestion(13)}
        >
          Si mon arrêt maladie dure longtemps, est-ce que je dois me soumettre à
          des contrôles médicaux ?
          <span className="dropdown-arrows">{openQuestion[13] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[13] && (
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
          className={`question ${openQuestion[14] ? "open" : ""}`}
          onClick={() => toggleQuestion(14)}
        >
          Comment savoir si ma maladie est considérée comme une maladie de
          longue durée ?
          <span className="dropdown-arrows">{openQuestion[14] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[14] && (
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
          className={`question ${openQuestion[15] ? "open" : ""}`}
          onClick={() => toggleQuestion(15)}
        >
          Si mon salaire évolue, est-ce que mon indemnité journalière peut être
          revalorisée ?
          <span className="dropdown-arrows">{openQuestion[15] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[15] && (
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
          className={`question ${openQuestion[16] ? "open" : ""}`}
          onClick={() => toggleQuestion(16)}
        >
          Existe-t-il un montant minimum pour l’indemnité journalière lorsque je
          reçois 100 % ?
          <span className="dropdown-arrows">{openQuestion[16] ? "▲" : "▼"}</span>
        </h3>
        {openQuestion[16] && (
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

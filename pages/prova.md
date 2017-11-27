## Guida per la nuova funzionalità di deploy di GV ESB v4 alpha1

Il nuovo processo di deploy si basa su due fasi distinte: installazione della configurazione e rilascio di una configurazione installata.

### Installazione configurazione

- Connettersi alla gvconsole;
- Accedere tramite credenziali;
- Andare nella sezione "Deploy" tramite il side menù laterale;
- Qui è possibile vedere le informazioni riguardo alla configurazione attuale presente sull'istanza di karaf,
  più una lista di configurazioni aggiunte su cui è possibile effettuare il deploy (inzialmente vuota);
- Per aggiungere una nuova configurazione, cliccare sul bottone "+" arancione;
- Cliccare su "Sfoglia", selezionare il file .zip della configurazione che si desira aggiungere alla lista, scegliere l'ID
  (Attenzione! se si sceglie un ID già scelto, la configurazione già presente sarà sovrascritta da quella appena aggiunta);
- Cliccare su "Add"
- Si noti come la configurazione appena aggiunta, sia apparsa nella lista delle configurazioni;
- Scegliere la configurazione dalla lista e cliccare su "Deploy", o sul simbolo del cestino per eliminarla dalle configurazioni.

### Rilascio

- In ogni momento è possibile annulare il deploy cliccando sul pulsante "Cancel" in modo da tornare alla schermata precedente.

#### Step 1:

- Verrà visualizzata la lista di Services e Operations (all'interno di Services) presenti in entrambi i GVCore.xml,
  a sinistra il GVCore.xml della configurazione corrente, a destra il GVCore.xml della nuova configurazione che si sta
  per fare il deploy. In più è presente un pulsante per la visualizzazione del GVCore.xml come file.
- Dopo aver verificato che la configurazione sia apposto, fare click su "Next".

#### Step 2:

- Qui verranno visualizzate le property presenti nel nuovo GVCore.xml con accanto uno spazio per inserire il valore.
  In caso che delle property siano già presenti nel GVCore.xml della configurazione corrente, verrà visualizzato
  il valore già associatogli. Si può decidere di lasciare tale valore, o di sostituirlo semplicemente cancellando
  quello presente e scrivendo quello nuovo. Un controllo è associato alla pagina in modo che tutte le property devono
  essere riempite, altrimenti non si potrà continuare con il deploy visto che potrebbe portare ad un errore nell'utilizzo
  dei servizi. Quando si sarannò valorizzate tutte le property cliccare sul pulsante "Next".

#### Step 3:

- Qui verrà richiesta la conferma. Quando sicuri, cliccare su "Proceed".

### Reload Configuration:

- Per rendere effettivo il deploy della configurazione, cliccare sul pulsante di reload (accanto ad "Export") per aggiornare
  il sistema.

### Conclusione

- Ora è possibile notare come la configurazione appena caricata sia apparsa sotto "Current Configuration" e la data
  cambiata.

- Se si desidera esportare la configurazione, cliccare su "Export" e selezionare la directory dove salvare la configurazione
  sotto formato .zip

- Enjoy GV ESB Evolution!    

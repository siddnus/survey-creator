import { editorLocalization } from "../editorLocalization";

var polishStrings = {
  //survey templates
  survey: {
    edit: "Edytuj",
    dropQuestion: "Przeciągnij pytanie.",
    copy: "Kopiuj",
    addToToolbox: "Dodaj do palety",
    deletePanel: "Usuń panel",
    deleteQuestion: "Usuń pytanie",
    convertTo: "Konwertuj na"
  },
  //questionTypes
  qt: {
    checkbox: "Wielokrotny wybór",
    comment: "Komentarz",
    dropdown: "Lista wyboru",
    file: "Plik",
    html: "Html",
    matrix: "Macierz (jednokrotny wybór)",
    matrixdropdown: "Matrix (wielokrotny wybór)",
    matrixdynamic: "Matrix (dynamiczne wiersze)",
    multipletext: "Wiele linii tekstu",
    panel: "Panel",
    paneldynamic: "Panel (dynamiczne panele)",
    radiogroup: "Jednokrotny wybór",
    rating: "Ocena",
    text: "Pojedyncza odpowiedź",
    boolean: "Prawda/Fałsz",
    expression: "Wyrażenie"
  },
  //Strings in Editor
  ed: {
    survey: "Ankieta",
    Survey: "Ankieta",
    editSurvey: "Edytuj ankietę",
    addNewPage: "Dodaj nową sekcję",
    deletePage: "Usuń sekcję",
    editPage: "Edytuj sekcję",
    newPageName: "sekcja",
    newQuestionName: "pytanie",
    newPanelName: "panel",
    testSurvey: "Testuj ankietę",
    testSurveyAgain: "Testuj ponownie",
    testSurveyWidth: "Szerokość ankiety: ",
    embedSurvey: "Embed Survey",
    saveSurvey: "Zapisz ankietę",
    designer: "Projektant ankiety",
    jsonEditor: "JSON Editor",
    undo: "Cofnij",
    redo: "Ponów",
    options: "Opcje",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Paleta",
    delSelObject: "Usuń wybrany element",
    correctJSON: "Please correct JSON.",
    surveyResults: "Wynik ankiety: ",
    modified: "Zmodyfikowana",
    saving: "Trwa zapis",
    saved: "Zapisano"
  },
  //Property Editors
  pe: {
    apply: "Zastosuj",
    ok: "OK",
    cancel: "Anuluj",
    reset: "Resetuj",
    close: "Zamknij",
    delete: "Usuń",
    addNew: "Dodaj nową",
    removeAll: "Usuń wszystkie",
    edit: "Edytuj",
    empty: "<pusty>",
    fastEntry: "Szybkie wprowadzanie",
    formEntry: "Formularz",
    testService: "Testuj usługę",
    conditionHelp:
      "Podaj wyrażenie, które zwróci wartość prawda/fałsz. Jeśli chcesz, aby sekcja lub pytanie pozostały widoczne - powinno zwrócić prawdę. Przykład: {pytanie1} = 'wartość1' or ({pytanie2} * {pytanie4}  > 20 and {pytanie3} < 5)",
    expressionHelp:
      "Please enter an expression. You may use curly brackets to get access to the question values: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    assistantTitle: "Available questions:",

    propertyIsEmpty: "Podaj wartość",
    value: "Wartość",
    text: "Etykieta",
    required: "Wymagane?",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",

    url: "URL",
    path: "Path",
    valueName: "Value name",
    titleName: "Title name",

    hasOther: "Czy możliwa własna odpowiedź",
    otherText: "Other item text",
    name: "Nazwa",
    title: "Etykieta",
    cellType: "Typ komórki",
    colCount: "Liczba kolumn",
    choicesOrder: "Kolejność odpowiedzi",
    visible: "Czy widoczne?",
    isRequired: "Czy wymagalne?",
    startWithNewLine: "Czy rozpoczyna się nową linią?",
    rows: "Liczba wierszy",
    placeHolder: "Input place holder",
    showPreview: "Is image preview shown?",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size in bytes",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    addRowText: "Add row button text",
    removeRowText: "Remove row button text",
    minRateDescription: "Opis najniższej oceny",
    maxRateDescription: "Opis najwyższej oceny",
    inputType: "Input type",
    optionsCaption: "Options caption",
    defaultValue: "Default value",

    surveyEditorTitle: "Edytuj ankietę",
    qEditorTitle: "Edytuj: {0}",

    //survey
    showTitle: "Pokaż/ukryj tytuł",
    locale: "Domyślny język",
    mode: "Tryb (edycja/podgląd)",
    clearInvisibleValues: "Usuń niewidoczne odpowiedzi",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Page previous button text",
    pageNextText: "Page next button text",
    completeText: "Complete button text",
    startSurveyText: "Start button text",
    showNavigationButtons: "Show navigation buttons (default navigation)",
    showPrevButton: "Show previous button (user may return on previous page)",
    firstPageIsStarted: "The first page in the survey is a started page.",
    showCompletedPage: "Show the completed page at the end (completedHtml)",
    goNextPageAutomatic:
      "On answering all questions, go to the next page automatically",
    showProgressBar: "Show progress bar",
    questionTitleLocation: "Question title location",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Show question numbers",
    questionTitleTemplate:
      "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    focusFirstQuestionAutomatic: "Focus first question on changing the page",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "Maximum time to finish the survey",
    maxTimeToFinishPage: "Maximum time to finish a page in the survey",
    showTimerPanel: "Show timer panel",
    showTimerPanelMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    panelAddText: "Adding panel text",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Show all elements on one page",

    tabs: {
      general: "Ogólne",
      fileOptions: "Options",
      html: "Html Editor",
      columns: "Kolumny",
      rows: "Wiersze",
      choices: "Odpowiedzi",
      visibleIf: "Widoczne jeśli",
      enableIf: "Enable If",
      rateValues: "Wartość oceny",
      choicesByUrl: "Odpowiedzi z webserwisu",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      completedHtml: "Completed Html",
      loadingHtml: "Loading Html",
      timer: "Timer/Quiz",
      triggers: "Triggers",
      templateTitle: "Template title"
    },
    editProperty: "Edit property '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerSetValue: "to: ",
    triggerIsVariable: "Do not put the variable into the survey result."
  },
  //Property values
  pv: {
    true: "prawda",
    false: "fałsz"
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "Less or Equals"
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    standard: "No bootstrap",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Wybierz stronę, aby ją przetestować:"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    visibletrigger: "change visibility"
  },
  //Properties
  p: {
    name: "nazwa",
    title: {
      name: "tytuł",
      title: "Pozostaw pusty, jeśli ma być taki sam, jak 'Nazwa'"
    },
    page_title: { name: "tytuł", title: "Tytuł sekcji" }
  }
};

editorLocalization.locales["pl"] = polishStrings;

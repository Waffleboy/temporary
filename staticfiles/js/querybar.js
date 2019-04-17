$( function() {
    var questions = [
        "Who has the highest h-index?",
        "Who are the top 5 Professors",
        "Which Professors have h-index between  and  ?",
        "Which Professors have h-index higher than 10",
        "Which Professors have h-index lower than 10",
        "Which Associate Professors have h-index lower than 10?",
        "Which Assistant Professors have h-index higher than 10?",
        "Who has the highest FWCI?",
        "Who has the highest Document Count",
        "Who has the highest Citation Count",
        "Which Professor has the highest Document count",
        "Which Assistant Professor has the highest Document count",
        "Which Professor has the highest Subject Area Count",
        "Which Assistant Professor has the highest Subject Area Count",
        "Which Professor has Subject Area Count lower than ?",
        "Which Professor has Subject Area Count higher than ?",
        "Which Professor has Subject Area Count between   and   ?",
        "Which Assistant Professor has the highest Subject Area Count?",
        "Which Assistant Professor has the lowest Subject Area Count?",
        "Which Assistant Professor has SUbject Area Count between   and  ?"
    ];
    $("#id_query").autocomplete({
        source: questions
    });
});

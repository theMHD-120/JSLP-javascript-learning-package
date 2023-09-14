// Part 14 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - Regular expressions (RegExp);

function regExpObject() {

    /*
        Definition:
            A regular expression is a sequence of characters that forms a search pattern;
            Syntax of object defining: /pattern/modifiers;
        ---
        See the following links to learn more about regular expressions (RegExp):
            https://www.w3schools.com/js/js_regexp.asp
            https://en.wikipedia.org/wiki/Regular_expression
        ---
        Patterns are case-sensitive;
        What the meaning of case-sensitive?
            Uppercase and Lowercase letters are different;
            For example JavaScript and javascript are different;         
    */

    
    // RegExp object methods -----------------------------------------------------------------------
    var pattern1 = /[tshpMeHsD]/;
    
    var word1 = "apple";
    alert(pattern1.test(word1));
    /*
        If only one of << tshpMeHsD >> pattern letters is
            Existed in the word, test() method returns << true >>;
    */

    var word2 = "html";
    alert(pattern1.exec(word2));
    /*
        Returns the first common letter between pattern and the word;
        First letter in the word;
    */
    
    var word3 = "MHD120";
    var pattern2 = /[a-z]/;
    var pattern3 = /[a-z]/i;
    var pattern4 = /[a-zA-Z]/;
    var pattern5 = /[^0-9]/;
    alert(pattern2.test(word3));
    alert(pattern3.test(word3));
    alert(pattern4.test(word3));
    alert(pattern5.test(word3));
    /*
        P2 -> Returns << true >> if the word contains lowercase letters;
        P3 -> Returns << true >> if the word contains letters (case is ignored with << i >> modifier); 
        P4 -> Returns << true >> if the word contains letters (a to z and A to Z);
        ---
        P5 -> Retuens << true >> if there is a non-numeric (one or more) character in the word;
        Be careful; If there is (( even one )) non-numeric character, we are alerted << true >>;
        << ^ >> --> << not >> sign; 
        ---
        For example:
            pattern5 = /[^abc]/;
            alert(pattern5.test("dfs"));   --> returns << true >>;
            alert(pattern5.test("afd"));   --> returns << true >>;
            alert(pattern5.test("afba"));  --> returns << true >>;
            alert(pattern5.test("afbq"));  --> returns << true >>;
            alert(pattern5.test("afbcq")); --> returns << true >>;
            alert(pattern5.test("abc"));   --> returns << false >>;
    */  


    // RegExp - Meta Characters --------------------------------------------------------------------
    /*
        List of meta Characters:
            1.Point(.);
    */
    var pattern6 = /a.i/;
    txt1 = "Ali gets a react api for his project";
    alert(pattern6.test(txt1));
    alert(pattern6.exec(txt1));
    /*
        How it works?
            Is there a word with type (a.i) in the txt1? (a, any character, i);
            Any character?
                Yes; Any character;
                White space, &, ;, -, a letter, a number and ...;s
        ---
        Attention:
            Ali is not in the /a.i/ type;
            But ali is :);
        ---
        Note:
            /a.i/ type   --> a, any character, i;
            /a..i/ type  --> a, any character, any character, i;
            /a...i/ type --> a, any character, any character, any character, i;
            and more :);
    */
}
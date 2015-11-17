(function() {
        'use strict';

        var db = null;
        var dbname = 'idb://weather_records';

        window.addEventListener( 'load', loadPouch, false );

        function loadPouch() {
            PouchDB(dbname, function(err, pouchdb){
                if(err){
                    alert("Can't open pouchdb database");
                }
				else{
                    db = pouchdb;
                    windowLoadHandler();
                }
            });
        }

        function windowLoadHandler() {
            addEventListeners();
        }

        function addEventListeners() {
            document.getElementById('upload').addEventListener( 'click', addToDB, false);
            document.getElementById('show').addEventListener( 'click', showText, false);
        }

        var addToDB = function(){
            var text = document.getElementById('currentdate').innerHTML + ' ' + document.getElementById('today').innerHTML + '<br>';
            db.post({text: text});
        }

        var showText= function(){
            db.allDocs({include_docs: true}, function(err, res){
                if(!err){
                    var out= "";
                    res.rows.forEach(function(element){
                        out+= element.doc.text + '<br>';
                    });
                    document.getElementById('display-area').innerHTML = out;
                }
            })
        }
    })();
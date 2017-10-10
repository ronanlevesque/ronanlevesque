//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//          Hey. I see you're quite the curious type. Here's one advice for you:
//          DON'T MIND THE COMPLETELY UGLY CODE BELOW.
//
//          I knew nothing about Angular at that time and didn't bother to optimize, refactor, or whatever.
//
//
//
//          So yeah, it's ugly. You've been warned.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = angular.module("moovieApp", ["firebase",'ui.directives','ui.filters']);

app.directive('login', function() {
    return {
      template: '<a href="" class="open-popup" ng-click="openPopup($event)">+</a><a href="" ng-click="logMeOut($event)">-</a>'
    };
});

app.directive('logout', function() {
    return {
      template: '<a href="" id="options-login" ng-click="openLogin($event)">c</a>'
    };
});

app.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            element.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(element.html());
                });
            });

            ctrl.$render = function() {
                element.html(ctrl.$viewValue);
            };
            ctrl.$render();
        }
    };
});

app.controller('MyController', ['$scope', 'angularFireCollection',
    function MyController($scope, angularFireCollection) {
        $scope.items = angularFireCollection(new Firebase("https://moovies.firebaseio.com/"));
        $scope.loginOn = false;
        $scope.loginOff = false;
        $scope.adminOn = false;
        var failauth = document.getElementById('failauth').style,
			auth = document.getElementById('auth').style,
			deauth = document.getElementById('deauth').style,
			success = document.getElementById('success').style,
			success2 = document.getElementById('success2').style,
			back = document.getElementById('back').style,
			back2 = document.getElementById('back2').style,
			back3 = document.getElementById('back3').style,
			popup = document.getElementById('popup').style,
			popupLogin = document.getElementById('popup--login').style,
			erreur = document.getElementById('erreur').style,
			erreur2 = document.getElementById('erreur2').style,
			ref = new Firebase('https://moovies.firebaseio.com/');
        var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
            $scope.$apply(function () {
                if (error) {
                    failauth.display = 'block';
                    auth.display = 'none';
                    back2.display = 'none';
                    back3.display = 'block';
                    setTimeout(function(){
                        failauth.display = 'none';
                        back3.display = 'none';
                    },1500);
                    console.log('erreur');
                }
                else if (user) {
                    $scope.loginOff = false;
                    $scope.loginOn = true;
                    $scope.adminOn = true;
                    console.log('ok');
                }
                else {
                    $scope.loginOff = true;
                    $scope.loginOn = false;
                    $scope.adminOn = false;
                    console.log('ko');
                }
            });
        });

        $scope.openLogin = function(event) {
            popupLogin.display = 'block';
            back.display = 'block';
        };

        $scope.addItem = function() {
            var a = $scope.titre;
            var b = $scope.url;
            var c = $scope.selectcat;
            if ((a==null || a=="") || (c==null || c==""))
            {
                erreur.display = 'block';
                return false;
            } else if (b==null || b=="") {
                $scope.items.add({titre: a, url: "", categorie: c});
                    $scope.titre = "";
                    $scope.url = "";
                    $scope.selectcat = "";
                popup.display = 'none';
                erreur.display = 'none';
                success.display = 'block';
                back.display = 'none';
                back3.display = 'block';
                setTimeout(function(){
                    back3.display = 'none';
                    success.display = 'none';
                },1500);

            }
            else {
                $scope.items.add({titre: a, url: $scope.url, categorie: c});
                    $scope.titre = "";
                    $scope.url = "";
                    $scope.selectcat = "";
                popup.display = 'none';
                erreur.display = 'none';
                success.display = 'block';
                back.display = 'none';
                back3.display = 'block';
                setTimeout(function(){
                    back3.display = 'none';
                    success.display = 'none';
                },1500);

            }
        }

        $scope.openPopup = function() {
            popup.display = 'block';
            back.display = 'block';
            return false;
        };

        $scope.closePopup = function() {
            popup.display = 'none';
            popupLogin.display = 'none';
            back.display = 'none';
            erreur.display = 'none';
            erreur2.display = 'none';
            $('.suppr-film').css('display','none');
            $('.edit-film').css('display','none');
            return false;
        };

        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                popup.display = 'none';
                popupLogin.display = 'none';
                back.display = 'none';
                erreur.display = 'none';
                erreur2.display = 'none';
                $('.suppr-film').css('display','none');
                $('.edit-film').css('display','none');
            }
        });

        $scope.removeFilm = function(event) {
            $(event.target).parent().parent().children('div').css('display','block');
            back.display = 'block';
            erreur.display = 'block';
        };

        $scope.editFilm = function(event) {
            $scope.query = "";
            $scope.categoryFilter = "";
            $(event.target).parent().parent().children('form').css('display','block');
            back.display = 'block';
        };

        $scope.editClose = function(event) {
            $('.edit-film').css('display','none');
            back.display = 'none';
            success2.display = 'block';
            back3.display = 'block';
            setTimeout(function(){
                back3.display = 'none';
                success2.display = 'none';
            },1500);
        };

        $scope.logMeIn = function(event) {
            authClient.login('password', {
                email: $("#email").val(),
                password: $("#password").val(),
                rememberMe: true
            });
            popupLogin.display = 'none';
            auth.display = 'block';
            back.display = 'none';
            back2.display = 'block';
            setTimeout(function(){
                auth.display = 'none';
                back2.display = 'none';
            },1500);
        };

        $scope.logMeOut = function(event) {
            deauth.display = 'block';
            back2.display = 'block';
            authClient.logout();
            setTimeout(function(){
                deauth.display = 'none';
                back2.display = 'none';
            },1500);
        };
    }
]);




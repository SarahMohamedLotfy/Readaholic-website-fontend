'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' : 'data-target="#xs-components-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' :
                                            'id="xs-components-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' }>
                                            <li class="link">
                                                <a href="components/AboutusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FollowersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FollowersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FollowingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FollowingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyBooksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyBooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' : 'data-target="#xs-injectables-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' :
                                        'id="xs-injectables-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' }>
                                        <li class="link">
                                            <a href="injectables/HttpService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogInHttpService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LogInHttpService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' : 'data-target="#xs-pipes-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' :
                                            'id="xs-pipes-links-module-AppModule-18dc5de0c683ed1833df52e1d494239c"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-9087602ecdc7672764af6b83dcd888cb"' : 'data-target="#xs-components-links-module-SharedModule-9087602ecdc7672764af6b83dcd888cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-9087602ecdc7672764af6b83dcd888cb"' :
                                            'id="xs-components-links-module-SharedModule-9087602ecdc7672764af6b83dcd888cb"' }>
                                            <li class="link">
                                                <a href="components/DropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/book.html" data-type="entity-link">book</a>
                            </li>
                            <li class="link">
                                <a href="classes/followerComponent.html" data-type="entity-link">followerComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/followingComponent.html" data-type="entity-link">followingComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/myBooks.html" data-type="entity-link">myBooks</a>
                            </li>
                            <li class="link">
                                <a href="classes/profile.html" data-type="entity-link">profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/review.html" data-type="entity-link">review</a>
                            </li>
                            <li class="link">
                                <a href="classes/updates.html" data-type="entity-link">updates</a>
                            </li>
                            <li class="link">
                                <a href="classes/user.html" data-type="entity-link">user</a>
                            </li>
                            <li class="link">
                                <a href="classes/user_shelves.html" data-type="entity-link">user_shelves</a>
                            </li>
                            <li class="link">
                                <a href="classes/userBookInfo.html" data-type="entity-link">userBookInfo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/aboutusService.html" data-type="entity-link">aboutusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link">BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link">HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpFollowinggService.html" data-type="entity-link">HttpFollowinggService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpFollowingService.html" data-type="entity-link">HttpFollowingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpmybooksService.html" data-type="entity-link">HttpmybooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogInHttpService.html" data-type="entity-link">LogInHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link">ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShelfService.html" data-type="entity-link">ShelfService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/FakeBackendInterceptor.html" data-type="entity-link">FakeBackendInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
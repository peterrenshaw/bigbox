


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap/src/typeahead/typeahead.js at master · angular-ui/bootstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe113-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.35) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="8b99d641-eb37-4745-b7c1-e25b444641fa" name="octolytics-dimension-request_id" /><meta content="4793533" name="octolytics-actor-id" /><meta content="peterrenshaw" name="octolytics-actor-login" /><meta content="330b2966ba4c39cc448d2759277fcff8de1ab115d927b345df104d73ab9178b0" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ly8vGj9o86VPrcokovPe7pF7BiXUrcfO3/wPvZyHDtg=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-763ba3a3efe38a93f2a6838da7eeaee2334977db.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-439e136a912bf821473757ddeaa407651188d94c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-f86a2975a82dceee28e5afe598d1ebbfd7109d79.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-8b598e4eeb36a68a0d1011fb20bdb1ec3a91fd1b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="c1e97ebfba5ca7ef1051bae1cdebb617">

        <link data-pjax-transient rel='permalink' href='/angular-ui/bootstrap/blob/37777caf9db6aa31ef9fd9b4bb1dc1cc7086e079/src/typeahead/typeahead.js'>
  <meta property="og:title" content="bootstrap"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/angular-ui/bootstrap"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Native AngularJS (Angular) directives for Twitter&#39;s Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required!"/>

  <meta name="description" content="Native AngularJS (Angular) directives for Twitter&#39;s Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required!" />

  <meta content="1530011" name="octolytics-dimension-user_id" /><meta content="angular-ui" name="octolytics-dimension-user_login" /><meta content="6094683" name="octolytics-dimension-repository_id" /><meta content="angular-ui/bootstrap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6094683" name="octolytics-dimension-repository_network_root_id" /><meta content="angular-ui/bootstrap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular-ui/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have unread notifications">
        <span class="mail-status unread"></span>
</a>    <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="peterrenshaw"
      data-repo="angular-ui/bootstrap"
      data-branch="master"
      data-sha="62e877e7a98ab9e4032a423945333ee7d4435ee1"
  >

    <input type="hidden" name="nwo" value="angular-ui/bootstrap" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/peterrenshaw" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/641210a29e54a9c45c6c67bc5cd53454?d=https%3A%2F%2Fidenticons.github.com%2F1233cfb79593c674bc2cfed53ecce020.png&amp;s=140" width="20" /> peterrenshaw
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="angular-ui/bootstrap">This repository</span>
    </li>
    <li>
      <a href="/angular-ui/bootstrap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ly8vGj9o86VPrcokovPe7pF7BiXUrcfO3/wPvZyHDtg=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6094683" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/angular-ui/bootstrap/watchers">
          226
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container on">
  <a href="/angular-ui/bootstrap/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/angular-ui/bootstrap/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/angular-ui/bootstrap/stargazers">2,113</a>
</div>

  </li>


        <li>
          <a href="/angular-ui/bootstrap/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/angular-ui/bootstrap/network" class="social-count">1,076</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/angular-ui" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular-ui</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/angular-ui/bootstrap" class="js-current-repository js-repo-home-link">bootstrap</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/angular-ui/bootstrap" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /angular-ui/bootstrap">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/angular-ui/bootstrap/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /angular-ui/bootstrap/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>65</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/angular-ui/bootstrap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /angular-ui/bootstrap/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>22</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/angular-ui/bootstrap/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /angular-ui/bootstrap/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/angular-ui/bootstrap/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /angular-ui/bootstrap/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/angular-ui/bootstrap/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular-ui/bootstrap/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/angular-ui/bootstrap/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /angular-ui/bootstrap/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/angular-ui/bootstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular-ui/bootstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:angular-ui/bootstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:angular-ui/bootstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/angular-ui/bootstrap" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular-ui/bootstrap" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>



                <a href="/angular-ui/bootstrap/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:6847752c2c3de8fdcc9cf417f4d3f225 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:6847752c2c3de8fdcc9cf417f4d3f225 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/angular-ui/bootstrap/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master" role="button" aria-label="Switch branches or tags">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/bootstrap3_bis/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="bootstrap3_bis" data-skip-pjax="true" rel="nofollow" title="bootstrap3_bis">bootstrap3_bis</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/gh-pages/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" data-skip-pjax="true" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/goldfish/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="goldfish" data-skip-pjax="true" rel="nofollow" title="goldfish">goldfish</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/issue832/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="issue832" data-skip-pjax="true" rel="nofollow" title="issue832">issue832</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/master/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.5.0/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.0" data-skip-pjax="true" rel="nofollow" title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.4.0/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.0" data-skip-pjax="true" rel="nofollow" title="0.4.0">0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.3.0/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.3.0" data-skip-pjax="true" rel="nofollow" title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.2.0/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.0" data-skip-pjax="true" rel="nofollow" title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.1.0/src/typeahead/typeahead.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.0" data-skip-pjax="true" rel="nofollow" title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular-ui/bootstrap" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular-ui/bootstrap/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular-ui/bootstrap/tree/master/src/typeahead" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">typeahead</span></a></span><span class="separator"> / </span><strong class="final-path">typeahead.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/typeahead/typeahead.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/73cb0ce891d2be76bd0fdb6e14f4c91c?d=https%3A%2F%2Fidenticons.github.com%2F3e938297ba9793abbd9e22175e44baf5.png&amp;s=140" width="24" />
    <span class="author"><a href="/pkozlowski-opensource" rel="author">pkozlowski-opensource</a></span>
    <time class="js-relative-date" datetime="2013-09-03T11:01:36-07:00" title="2013-09-03 11:01:36">September 03, 2013</time>
    <div class="commit-title">
        <a href="/angular-ui/bootstrap/commit/7589339330caf1916dff178d03d3f5ee69c9178f" class="message" data-pjax="true" title="fix(typeahead): remove dependency on ng-bind-html-unsafe

Closes #813">fix(typeahead): remove dependency on ng-bind-html-unsafe</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="pkozlowski-opensource" href="/angular-ui/bootstrap/commits/master/src/typeahead/typeahead.js?author=pkozlowski-opensource"><img height="20" src="https://0.gravatar.com/avatar/73cb0ce891d2be76bd0fdb6e14f4c91c?d=https%3A%2F%2Fidenticons.github.com%2F3e938297ba9793abbd9e22175e44baf5.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="chrisirhc" href="/angular-ui/bootstrap/commits/master/src/typeahead/typeahead.js?author=chrisirhc"><img height="20" src="https://0.gravatar.com/avatar/22d0038769b1786fcdc0983bdb2e4033?d=https%3A%2F%2Fidenticons.github.com%2Ff04714253bfc3798dd84007a7e4fdebd.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="khalilravanna" href="/angular-ui/bootstrap/commits/master/src/typeahead/typeahead.js?author=khalilravanna"><img height="20" src="https://0.gravatar.com/avatar/09a57181cd599ad8d5f2cb4fc4702c59?d=https%3A%2F%2Fidenticons.github.com%2F5dc07f9579e5b33b656876c3a46e2ba8.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Charuru" href="/angular-ui/bootstrap/commits/master/src/typeahead/typeahead.js?author=Charuru"><img height="20" src="https://1.gravatar.com/avatar/b330a7a5152c451c712887a1c6a2a21e?d=https%3A%2F%2Fidenticons.github.com%2F61087b9c41bcaf8e016aa7ad6279b485.png&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/73cb0ce891d2be76bd0fdb6e14f4c91c?d=https%3A%2F%2Fidenticons.github.com%2F3e938297ba9793abbd9e22175e44baf5.png&amp;s=140" width="24" />
          <a href="/pkozlowski-opensource">pkozlowski-opensource</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/22d0038769b1786fcdc0983bdb2e4033?d=https%3A%2F%2Fidenticons.github.com%2Ff04714253bfc3798dd84007a7e4fdebd.png&amp;s=140" width="24" />
          <a href="/chrisirhc">chrisirhc</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/09a57181cd599ad8d5f2cb4fc4702c59?d=https%3A%2F%2Fidenticons.github.com%2F5dc07f9579e5b33b656876c3a46e2ba8.png&amp;s=140" width="24" />
          <a href="/khalilravanna">khalilravanna</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/b330a7a5152c451c712887a1c6a2a21e?d=https%3A%2F%2Fidenticons.github.com%2F61087b9c41bcaf8e016aa7ad6279b485.png&amp;s=140" width="24" />
          <a href="/Charuru">Charuru</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>327 lines (257 sloc)</span>
        <span>10.793 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/angular-ui/bootstrap/edit/master/src/typeahead/typeahead.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/angular-ui/bootstrap/raw/master/src/typeahead/typeahead.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/angular-ui/bootstrap/blame/master/src/typeahead/typeahead.js" class="button minibutton ">Blame</a>
          <a href="/angular-ui/bootstrap/commits/master/src/typeahead/typeahead.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/angular-ui/bootstrap/delete/master/src/typeahead/typeahead.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ui.bootstrap.typeahead&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ui.bootstrap.position&#39;</span><span class="p">,</span> <span class="s1">&#39;ui.bootstrap.bindHtml&#39;</span><span class="p">])</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">/**</span></div><div class='line' id='LC4'><span class="cm"> * A helper service that can parse typeahead&#39;s syntax (string provided by users)</span></div><div class='line' id='LC5'><span class="cm"> * Extracted to a separate service for ease of unit testing</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;typeaheadParser&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$parse&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$parse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="c1">//                      00000111000000000000022200000000000000003333333333333330000000000044000</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">TYPEAHEAD_REGEXP</span> <span class="o">=</span> <span class="sr">/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parse</span><span class="o">:</span><span class="kd">function</span> <span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">TYPEAHEAD_REGEXP</span><span class="p">),</span> <span class="nx">modelMapper</span><span class="p">,</span> <span class="nx">viewMapper</span><span class="p">,</span> <span class="nx">source</span><span class="p">;</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected typeahead specification in form of &#39;_modelValue_ (as _label_)? for _item_ in _collection_&#39;&quot;</span> <span class="o">+</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot; but got &#39;&quot;</span> <span class="o">+</span> <span class="nx">input</span> <span class="o">+</span> <span class="s2">&quot;&#39;.&quot;</span><span class="p">);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemName</span><span class="o">:</span><span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span><span class="o">:</span><span class="nx">$parse</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]),</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewMapper</span><span class="o">:</span><span class="nx">$parse</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modelMapper</span><span class="o">:</span><span class="nx">$parse</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC30'><span class="p">}])</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;typeahead&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$compile&#39;</span><span class="p">,</span> <span class="s1">&#39;$parse&#39;</span><span class="p">,</span> <span class="s1">&#39;$q&#39;</span><span class="p">,</span> <span class="s1">&#39;$timeout&#39;</span><span class="p">,</span> <span class="s1">&#39;$document&#39;</span><span class="p">,</span> <span class="s1">&#39;$position&#39;</span><span class="p">,</span> <span class="s1">&#39;typeaheadParser&#39;</span><span class="p">,</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$compile</span><span class="p">,</span> <span class="nx">$parse</span><span class="p">,</span> <span class="nx">$q</span><span class="p">,</span> <span class="nx">$timeout</span><span class="p">,</span> <span class="nx">$document</span><span class="p">,</span> <span class="nx">$position</span><span class="p">,</span> <span class="nx">typeaheadParser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">HOT_KEYS</span> <span class="o">=</span> <span class="p">[</span><span class="mi">9</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">40</span><span class="p">];</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">require</span><span class="o">:</span><span class="s1">&#39;ngModel&#39;</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span><span class="kd">function</span> <span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">modelCtrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//SUPPORTED ATTRIBUTES (OPTIONS)</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//minimal no of characters that needs to be entered before typeahead kicks-in</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">minSearch</span> <span class="o">=</span> <span class="nx">originalScope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadMinLength</span><span class="p">)</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//minimal wait time after last character typed before typehead kicks-in</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">waitTime</span> <span class="o">=</span> <span class="nx">originalScope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadWaitMs</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//should it restrict model values to the ones selected from the popup only?</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isEditable</span> <span class="o">=</span> <span class="nx">originalScope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadEditable</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//binding to a variable that indicates if matches are being retrieved asynchronously</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isLoadingSetter</span> <span class="o">=</span> <span class="nx">$parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadLoading</span><span class="p">).</span><span class="nx">assign</span> <span class="o">||</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//a callback executed when a match is selected</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">onSelectCallback</span> <span class="o">=</span> <span class="nx">$parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadOnSelect</span><span class="p">);</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inputFormatter</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadInputFormatter</span> <span class="o">?</span> <span class="nx">$parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadInputFormatter</span><span class="p">)</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//INTERNAL VARIABLES</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//model setter executed upon match selection</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$setModelValue</span> <span class="o">=</span> <span class="nx">$parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">ngModel</span><span class="p">).</span><span class="nx">assign</span><span class="p">;</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//expressions used by typeahead</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parserResult</span> <span class="o">=</span> <span class="nx">typeaheadParser</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeahead</span><span class="p">);</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//pop-up element used to display matches</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">popUpEl</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="s1">&#39;&lt;typeahead-popup&gt;&lt;/typeahead-popup&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">popUpEl</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">matches</span><span class="o">:</span> <span class="s1">&#39;matches&#39;</span><span class="p">,</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">active</span><span class="o">:</span> <span class="s1">&#39;activeIdx&#39;</span><span class="p">,</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">select</span><span class="o">:</span> <span class="s1">&#39;select(activeIdx)&#39;</span><span class="p">,</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span><span class="o">:</span> <span class="s1">&#39;query&#39;</span><span class="p">,</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span> <span class="s1">&#39;position&#39;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//custom item template</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadTemplateUrl</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">popUpEl</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;template-url&#39;</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">typeaheadTemplateUrl</span><span class="p">);</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//create a child scope for the typeahead directive so we are not polluting original scope</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//with typeahead-specific data (matches, query etc.)</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">scope</span> <span class="o">=</span> <span class="nx">originalScope</span><span class="p">.</span><span class="nx">$new</span><span class="p">();</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">originalScope</span><span class="p">.</span><span class="nx">$on</span><span class="p">(</span><span class="s1">&#39;$destroy&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$destroy</span><span class="p">();</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resetMatches</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getMatchesAsync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">inputValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">locals</span> <span class="o">=</span> <span class="p">{</span><span class="nx">$viewValue</span><span class="o">:</span> <span class="nx">inputValue</span><span class="p">};</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isLoadingSetter</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$q</span><span class="p">.</span><span class="nx">when</span><span class="p">(</span><span class="nx">parserResult</span><span class="p">.</span><span class="nx">source</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">)).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">matches</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//it might happen that several async queries were in progress if a user were typing fast</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//but we are interested only in responses that correspond to the current view value</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">inputValue</span> <span class="o">===</span> <span class="nx">modelCtrl</span><span class="p">.</span><span class="nx">$viewValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//transform labels</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">locals</span><span class="p">[</span><span class="nx">parserResult</span><span class="p">.</span><span class="nx">itemName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">matches</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">label</span><span class="o">:</span> <span class="nx">parserResult</span><span class="p">.</span><span class="nx">viewMapper</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">),</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="o">:</span> <span class="nx">matches</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="nx">inputValue</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//position pop-up with matches - we need to re-calculate its position each time we are opening a window</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//due to other elements being rendered</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="nx">$position</span><span class="p">.</span><span class="nx">position</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">element</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;offsetHeight&#39;</span><span class="p">);</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isLoadingSetter</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isLoadingSetter</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//we need to propagate user&#39;s query so we can higlight matches</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later </span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeoutPromise</span><span class="p">;</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//plug into $parsers pipeline to open a typeahead on view changes initiated from DOM</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modelCtrl</span><span class="p">.</span><span class="nx">$parsers</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">inputValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">inputValue</span> <span class="o">&amp;&amp;</span> <span class="nx">inputValue</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">minSearch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">waitTime</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">timeoutPromise</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$timeout</span><span class="p">.</span><span class="nx">cancel</span><span class="p">(</span><span class="nx">timeoutPromise</span><span class="p">);</span><span class="c1">//cancel previous timeout</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeoutPromise</span> <span class="o">=</span> <span class="nx">$timeout</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getMatchesAsync</span><span class="p">(</span><span class="nx">inputValue</span><span class="p">);</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">waitTime</span><span class="p">);</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getMatchesAsync</span><span class="p">(</span><span class="nx">inputValue</span><span class="p">);</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isEditable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">inputValue</span><span class="p">;</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modelCtrl</span><span class="p">.</span><span class="nx">$setValidity</span><span class="p">(</span><span class="s1">&#39;editable&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modelCtrl</span><span class="p">.</span><span class="nx">$formatters</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">modelValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">candidateViewValue</span><span class="p">,</span> <span class="nx">emptyViewValue</span><span class="p">;</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">locals</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">inputFormatter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">locals</span><span class="p">[</span><span class="s1">&#39;$model&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">modelValue</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">inputFormatter</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">);</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//it might happen that we don&#39;t have enough info to properly render input value</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//we need to check for this situation and simply return model value if we can&#39;t apply custom formatting</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">locals</span><span class="p">[</span><span class="nx">parserResult</span><span class="p">.</span><span class="nx">itemName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">modelValue</span><span class="p">;</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">candidateViewValue</span> <span class="o">=</span> <span class="nx">parserResult</span><span class="p">.</span><span class="nx">viewMapper</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">locals</span><span class="p">[</span><span class="nx">parserResult</span><span class="p">.</span><span class="nx">itemName</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">emptyViewValue</span> <span class="o">=</span> <span class="nx">parserResult</span><span class="p">.</span><span class="nx">viewMapper</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">);</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">candidateViewValue</span><span class="o">!==</span> <span class="nx">emptyViewValue</span> <span class="o">?</span> <span class="nx">candidateViewValue</span> <span class="o">:</span> <span class="nx">modelValue</span><span class="p">;</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">select</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">activeIdx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//called from within the $digest() cycle</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">locals</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">locals</span><span class="p">[</span><span class="nx">parserResult</span><span class="p">.</span><span class="nx">itemName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">[</span><span class="nx">activeIdx</span><span class="p">].</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span> <span class="o">=</span> <span class="nx">parserResult</span><span class="p">.</span><span class="nx">modelMapper</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">);</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$setModelValue</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modelCtrl</span><span class="p">.</span><span class="nx">$setValidity</span><span class="p">(</span><span class="s1">&#39;editable&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onSelectCallback</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$item</span><span class="o">:</span> <span class="nx">item</span><span class="p">,</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$model</span><span class="o">:</span> <span class="nx">model</span><span class="p">,</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$label</span><span class="o">:</span> <span class="nx">parserResult</span><span class="p">.</span><span class="nx">viewMapper</span><span class="p">(</span><span class="nx">originalScope</span><span class="p">,</span> <span class="nx">locals</span><span class="p">)</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//return focus to the input element if a mach was selected via a mouse click event</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;keydown&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//typeahead is open and an &quot;interesting&quot; key was pressed</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">HOT_KEYS</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">which</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">evt</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">which</span> <span class="o">===</span> <span class="mi">40</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">=</span> <span class="p">(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">%</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$digest</span><span class="p">();</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">which</span> <span class="o">===</span> <span class="mi">38</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">=</span> <span class="p">(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">?</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span> <span class="o">:</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$digest</span><span class="p">();</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">which</span> <span class="o">===</span> <span class="mi">13</span> <span class="o">||</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">which</span> <span class="o">===</span> <span class="mi">9</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$apply</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">activeIdx</span><span class="p">);</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">which</span> <span class="o">===</span> <span class="mi">27</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">evt</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$digest</span><span class="p">();</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Keep reference to click handler to unbind it.</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dismissClickHandler</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resetMatches</span><span class="p">();</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$digest</span><span class="p">();</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">dismissClickHandler</span><span class="p">);</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">originalScope</span><span class="p">.</span><span class="nx">$on</span><span class="p">(</span><span class="s1">&#39;$destroy&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">dismissClickHandler</span><span class="p">);</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="nx">$compile</span><span class="p">(</span><span class="nx">popUpEl</span><span class="p">)(</span><span class="nx">scope</span><span class="p">));</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC262'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'><span class="p">}])</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;typeaheadPopup&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">restrict</span><span class="o">:</span><span class="s1">&#39;E&#39;</span><span class="p">,</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="o">:</span><span class="p">{</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">matches</span><span class="o">:</span><span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span><span class="o">:</span><span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">active</span><span class="o">:</span><span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span><span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">select</span><span class="o">:</span><span class="s1">&#39;&amp;&#39;</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">templateUrl</span><span class="o">:</span><span class="s1">&#39;template/typeahead/typeahead-popup.html&#39;</span><span class="p">,</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span><span class="kd">function</span> <span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">templateUrl</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">templateUrl</span><span class="p">;</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">isOpen</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">matchIdx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">active</span> <span class="o">==</span> <span class="nx">matchIdx</span><span class="p">;</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">selectActive</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">matchIdx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="nx">matchIdx</span><span class="p">;</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">selectMatch</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">activeIdx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">select</span><span class="p">({</span><span class="nx">activeIdx</span><span class="o">:</span><span class="nx">activeIdx</span><span class="p">});</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC299'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;typeaheadMatch&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$http&#39;</span><span class="p">,</span> <span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span> <span class="s1">&#39;$compile&#39;</span><span class="p">,</span> <span class="s1">&#39;$parse&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$http</span><span class="p">,</span> <span class="nx">$templateCache</span><span class="p">,</span> <span class="nx">$compile</span><span class="p">,</span> <span class="nx">$parse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">restrict</span><span class="o">:</span><span class="s1">&#39;E&#39;</span><span class="p">,</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="o">:</span><span class="p">{</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span><span class="o">:</span><span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">match</span><span class="o">:</span><span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span><span class="o">:</span><span class="s1">&#39;=&#39;</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span><span class="kd">function</span> <span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tplUrl</span> <span class="o">=</span> <span class="nx">$parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">templateUrl</span><span class="p">)(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">$parent</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;template/typeahead/typeahead-match.html&#39;</span><span class="p">;</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$http</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">tplUrl</span><span class="p">,</span> <span class="p">{</span><span class="nx">cache</span><span class="o">:</span> <span class="nx">$templateCache</span><span class="p">}).</span><span class="nx">success</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">tplContent</span><span class="p">){</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">replaceWith</span><span class="p">(</span><span class="nx">$compile</span><span class="p">(</span><span class="nx">tplContent</span><span class="p">.</span><span class="nx">trim</span><span class="p">())(</span><span class="nx">scope</span><span class="p">));</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="p">}])</span></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;typeaheadHighlight&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">escapeRegexp</span><span class="p">(</span><span class="nx">queryToEscape</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">queryToEscape</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([.?*+^$[\]\\(){}|-])/g</span><span class="p">,</span> <span class="s2">&quot;\\$1&quot;</span><span class="p">);</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">matchItem</span><span class="p">,</span> <span class="nx">query</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">query</span> <span class="o">?</span> <span class="nx">matchItem</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">escapeRegexp</span><span class="p">(</span><span class="nx">query</span><span class="p">),</span> <span class="s1">&#39;gi&#39;</span><span class="p">),</span> <span class="s1">&#39;&lt;strong&gt;$&amp;&lt;/strong&gt;&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">matchItem</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC327'>&nbsp;&nbsp;<span class="p">});</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06762s from github-fe113-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/angular-ui/bootstrap/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>


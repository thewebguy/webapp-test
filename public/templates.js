(function(e){TEMPLATES={"comments-toggle":new e({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<button class="comments-toggle">'),r.b(r.v(r.f("comments_count",e,t,0))),r.b(" "),r.b(r.v(r.f("i_reply",e,t,0))),r.b("</button>"),r.fl()},partials:{},subs:{}}),comments:new e({code:function(e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("comments",e,t,1),e,t,0,13,130,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<li><p class="metadata"><b>'),n.b(n.v(n.f("user",e,t,0))),n.b("</b> <time>"),n.b(n.v(n.f("time_ago",e,t,0))),n.b("</time></p><p>"),n.b(n.t(n.f("content",e,t,0))),n.b("<ul>"),n.b(n.rp("comments_list",e,t,"")),n.b("</ul></li>")}),e.pop()),r.fl()},partials:{},subs:{}}),"post-comments":new e({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="post-content">'),r.s(r.f("has_post",e,t,1),e,t,0,39,577,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<header><h1><a href="'),n.b(n.v(n.f("url",e,t,0))),n.b('" target="_blank">'),n.b(n.v(n.f("title",e,t,0))),n.b("<br>"),n.s(n.f("user",e,t,1),e,t,0,107,170,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.s(n.f("domain",e,t,1),e,t,0,118,159,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('<span class="link-text">'),n.b(n.v(n.f("domain",e,t,0))),n.b("</span>")}),e.pop())}),e.pop()),n.b('</a></h1><p class="metadata">'),n.s(n.f("user",e,t,1),e,t,0,217,412,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('<span class="inline-block">'),n.b(n.v(n.f("points",e,t,0))),n.b(" "),n.b(n.v(n.f("i_point",e,t,0))),n.b(" by "),n.b(n.v(n.f("user",e,t,0))),n.b('</span> <span class="inline-block">'),n.b(n.v(n.f("time_ago",e,t,0))),n.s(n.f("comments_count",e,t,1),e,t,0,344,386,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b(" &middot; "),n.b(n.v(n.f("comments_count",e,t,0))),n.b(" "),n.b(n.v(n.f("i_comment",e,t,0)))}),e.pop()),n.b("</span>")}),e.pop()),n.s(n.f("user",e,t,1),e,t,1,0,0,"")||(n.b('<span class="inline-block">'),n.b(n.v(n.f("time_ago",e,t,0))),n.b("</span>")),n.b('<a href="'),n.b(n.v(n.f("hn_url",e,t,0))),n.b('" target="_blank" class="external-link">'),n.b(n.v(n.f("short_hn_url",e,t,0))),n.b("</a></p></header>")}),e.pop()),r.s(r.f("has_content",e,t,1),e,t,0,606,905,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<section class="grouped-tableview">'),n.b(n.t(n.f("content",e,t,0))),n.s(n.f("has_poll",e,t,1),e,t,0,667,882,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('<ul class="poll">'),n.s(n.f("poll",e,t,1),e,t,0,693,868,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('<li><span class="poll-details"><b>'),n.b(n.v(n.f("item",e,t,0))),n.b('</b> <span class="points">'),n.b(n.v(n.f("points",e,t,0))),n.b(" "),n.b(n.v(n.f("i_point",e,t,0))),n.b('</span></span><div class="poll-bar"><span style="width: '),n.b(n.v(n.f("width",e,t,0))),n.b('"></span></div></li>')}),e.pop()),n.b("</ul>")}),e.pop()),n.b("</section>")}),e.pop()),r.b('</div><section class="comments">'),r.s(r.f("loading",e,t,1),e,t,0,965,1006,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<div class="loader">Loading&hellip;</div>')}),e.pop()),r.s(r.f("load_error",e,t,1),e,t,0,1033,1116,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<div class="load-error">Couldn\'t load comments.<br><button>Try again</button></div>')}),e.pop()),r.s(r.f("loading",e,t,1),e,t,1,0,0,"")||r.s(r.f("load_error",e,t,1),e,t,1,0,0,"")||(r.s(r.f("has_comments",e,t,1),e,t,0,1175,1202,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("<ul>"),n.b(n.rp("comments_list",e,t,"")),n.b("</ul>")}),e.pop()),r.s(r.f("has_comments",e,t,1),e,t,1,0,0,"")||r.b('<p class="no-comments">No comments.</p>')),r.b("</section>"),r.fl()},partials:{},subs:{}}),post:new e({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<li id="story-'),r.b(r.v(r.f("id",e,t,0))),r.b('" data-index="'),r.b(r.v(r.f("i",e,t,0))),r.b('" class="post-'),r.b(r.v(r.f("type",e,t,0))),r.b('"><a href="#/item/'),r.b(r.v(r.f("id",e,t,0))),r.b('" class="'),r.s(r.f("detail_disclosure",e,t,1),e,t,0,116,133,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("detail-disclosure")}),e.pop()),r.s(r.f("disclosure",e,t,1),e,t,0,170,180,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("disclosure")}),e.pop()),r.b(" "),r.s(r.f("selected",e,t,1),e,t,0,209,217,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("selected")}),e.pop()),r.b('"><div class="number">'),r.b(r.v(r.f("i",e,t,0))),r.b('.</div><div class="story"><b>'),r.b(r.v(r.f("title",e,t,0))),r.b("</b>"),r.s(r.f("user",e,t,1),e,t,0,308,600,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<span class="metadata">'),n.s(n.f("domain",e,t,1),e,t,0,342,387,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('<span class="link-text">'),n.b(n.v(n.f("domain",e,t,0))),n.b("</span><br>")}),e.pop()),n.b('<span class="inline-block">'),n.b(n.v(n.f("points",e,t,0))),n.b(" "),n.b(n.v(n.f("i_point",e,t,0))),n.b(" by "),n.b(n.v(n.f("user",e,t,0))),n.b('</span> <span class="inline-block">'),n.b(n.v(n.f("time_ago",e,t,0))),n.s(n.f("comments_count",e,t,1),e,t,0,525,567,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b(" &middot; "),n.b(n.v(n.f("comments_count",e,t,0))),n.b(" "),n.b(n.v(n.f("i_comment",e,t,0)))}),e.pop()),n.b("</span></span>")}),e.pop()),r.s(r.f("user",e,t,1),e,t,1,0,0,"")||(r.b('<span class="metadata"><span class="inline-block">'),r.b(r.v(r.f("time_ago",e,t,0))),r.b("</span></span>")),r.b("</div></a></li>"),r.fl()},partials:{},subs:{}}),"stories-load":new e({code:function(e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("loading",e,t,1),e,t,0,12,53,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<div class="loader">Loading&hellip;</div>')}),e.pop()),r.s(r.f("load_error",e,t,1),e,t,0,80,132,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<div class="load-error">Couldn\'t load stories.</div>')}),e.pop()),r.fl()},partials:{},subs:{}})}})(Hogan.Template)
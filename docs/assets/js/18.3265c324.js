(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{317:function(t,s,a){t.exports=a.p+"assets/img/1.686ea0a5.png"},369:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker環境でdjangoアプリ開発"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker環境でdjangoアプリ開発"}},[t._v("#")]),t._v(" docker環境でDjangoアプリ開発")]),t._v(" "),s("h2",{attrs:{id:"はじめに"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.docker.jp/compose/django.html#compose-django",target:"_blank",rel:"noopener noreferrer"}},[t._v("クィックスタート: Compose と Django"),s("OutboundLink")],1),t._v("を参考にして、Django/PostgreSQL アプリの開発環境を構築しました。")]),t._v(" "),s("h2",{attrs:{id:"開発環境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#開発環境"}},[t._v("#")]),t._v(" 開発環境")]),t._v(" "),s("p",[t._v("MacBook Air (M2チップ搭載 2022モデル)")]),t._v(" "),s("h2",{attrs:{id:"プロジェクトのコンポーネントを定義"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#プロジェクトのコンポーネントを定義"}},[t._v("#")]),t._v(" プロジェクトのコンポーネントを定義")]),t._v(" "),s("h3",{attrs:{id:"dockerfile-を作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-を作成"}},[t._v("#")]),t._v(" Dockerfile を作成")]),t._v(" "),s("p",[t._v("Dockerfileを作成し、次の内容を加えます。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("FROM python:3.9-buster\nENV PYTHONUNBUFFERED 1\nRUN mkdir /code\nWORKDIR /code\nADD requirements.txt /code/\nRUN pip install -r requirements.txt\nADD . /code/\n")])])]),s("h3",{attrs:{id:"requirements-txt-を作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements-txt-を作成"}},[t._v("#")]),t._v(" requirements.txt を作成")]),t._v(" "),s("p",[t._v("参考サイトでインストールされているDjangoのバージョンは古かったので上げています。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Django>=3.0,<4.0\npsycopg2\n")])])]),s("h3",{attrs:{id:"docker-compose-yml-を作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-を作成"}},[t._v("#")]),t._v(" docker-compose.yml を作成")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('version: \'3\'\n\nservices:\n  db:\n    image: postgres\n    ports: \n      - "5432:5432"\n    environment:\n      - POSTGRES_DB=postgres\n      - POSTGRES_USER=postgres\n      - POSTGRES_PASSWORD=postgres\n  web:\n    build: .\n    command: python3 manage.py runserver 0.0.0.0:8000\n    volumes:\n      - .:/code\n    ports:\n      - "8000:8000"\n    depends_on:\n      - db\n')])])]),s("h2",{attrs:{id:"django-プロジェクトの作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-プロジェクトの作成"}},[t._v("#")]),t._v(" Django プロジェクトの作成")]),t._v(" "),s("p",[t._v("プロジェクトのディレクトリに移動して、次のコマンドを打ちます。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" run web django-admin.py startproject "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("プロジェクト名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"データベースへの接続設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データベースへの接続設定"}},[t._v("#")]),t._v(" データベースへの接続設定")]),t._v(" "),s("p",[s("code",[t._v("{プロジェクト名}/settings.py")]),t._v(" ファイルの "),s("code",[t._v("DATABASES =")]),t._v(" の箇所を次のように変更します。")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("DATABASES "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ENGINE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.db.backends.postgresql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PASSWORD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PORT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5432")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("docker-compose up")]),t._v(" を実行します。")]),t._v(" "),s("p",[t._v("この状態で "),s("a",{attrs:{href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8000"),s("OutboundLink")],1),t._v(" にアクセスして、以下の画面が表示されたら成功です。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(317),alt:"1"}})]),t._v(" "),s("p",[t._v("サービスを停止させたい場合は、"),s("code",[t._v("Ctrl-C")]),t._v(" を押します。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
<template>
  <nav class="py-2 bg-light border-bottom navbar navbar-expand-md">
    <div class="container d-flex flex-wrap">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="responsive navigation var">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Navbar">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item"><a href="/" class="nav-link link-dark px-2 active">ホーム</a></li>
          <li class="nav-item"><a href="/information" class="nav-link link-dark px-2">お知らせ</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">コラム</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">和牛保険デリバティブ</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">お問い合わせ</a></li>
        </ul>
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">ログイン</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">口座開設</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <img src="@/assets/img/subak_logo.jpg" alt="logo" class="header_logo">
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" class="form-control" placeholder="検索...">
      </form>
    </div>
  </header>
</template>

<style>
.header_logo{
  width: 150px;
}

.navbar-toggler-icon{
  /* 三本線 */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
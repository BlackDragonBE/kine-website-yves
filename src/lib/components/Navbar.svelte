<script>
  import { resolve } from '$app/paths';
  import { afspraakUrl } from '$lib/config';
</script>

<nav>
  <a class="brand" href={resolve('/')}>
    <img src="/logo_only.svg" alt="Kine Demol logo" class="logo" />
    <span class="brand-text">
      <span class="kine">KINE</span> <span class="demol">DEMOL</span>
    </span>
  </a>
  <ul>
    <li><a href={resolve('/')}>Home</a></li>
    <li><a href={resolve('/over')}>Over</a></li>
    <li><a href={resolve('/behandelingen')}>Behandelingen</a></li>
    <li><a href={resolve('/praktisch')}>Praktisch</a></li>
    <li><a href={resolve('/contact')}>Contact</a></li>
    <li><a href={afspraakUrl} rel="external" class="btn-afspraak">Afspraak maken</a></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .logo {
    height: 48px;
    width: auto;
  }

  .brand-text {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .kine {
    color: #304557;
  }

  .demol {
    color: #1078b2;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  .btn-afspraak {
    background-color: #2563eb;
    color: #fff;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .btn-afspraak:hover {
    background-color: #1d4ed8;
    text-decoration: none;
  }
</style>

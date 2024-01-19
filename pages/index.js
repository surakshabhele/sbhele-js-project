import React from "react";
import Link from "next/link";
function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <h1>Flexbox template</h1>
        </li>
        <ul>
          <li>
            <Link href="/layouts/01">Presentation 01</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/001">Presentation 001</Link>
          </li>
          <br />
          <li>
            <Link href="//layouts/002">Presentation 002</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/003">Presentation 003</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/004">Presentation 004</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/005">Presentation 005</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/008">Presentation 008</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/008-responsive">
              Presentation 008 responsive
            </Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/009">Presentation 009</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/0010">Presentation 0010</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/0011">Presentation 0011</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/0012">Presentation 0012</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/0013">Presentation 0013</Link>
          </li>
          <br />
          <li>
            <Link href="/layouts/0014">Presentation 0014</Link>
          </li>
          <br />
        </ul>

       
        <li>
          <h3>
            <Link href="/admin/account">account</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/admin/admin">admin</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/admin/admin-18-new">admin-18-new</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/component/agency/header-component">agency</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/enviroment">Enviroment</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/travello-travel-agency">Travel-Landing-page</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/cowboy">Cowboy</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/ninjamail">Ninjamail</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/ninjamail-2">Ninjamail-2</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/photography-event">Photography-event</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/prabot">Prabot</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/stopwatch">stopwatch</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/slider">swiper</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/parallax">parallax</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/timer">Timer</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/mountainbeyond">MountainBeyond-Prallax</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/form-practice-using-formik/use-formik">use-formik</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/api-practice/api-using-useffect">api-using-useffect</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/api-practice/api-using-variable">api-using-variable</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/react-query/login-page">Login page using react query</Link>
          </h3>
        </li>
        {/* <li>
          <h3>
            <Link href="/dark-mode"></Link>
          </h3>
        </li> */}
        <li>
          <h3>
            <Link href="/to-do">to-do</Link>
          </h3>
        </li>
  
      <li>
          <h3>
            <Link href="/hooks-practice/use-context">use-context</Link>
          </h3>
        </li>
      </ul>
    </div>
  );
}
export default Homepage;

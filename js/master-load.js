// Master-page loader
document.getElementById("master-header").innerHTML = `
    <header>
            <a href="#" class="logo">NEKOPORTAL</a>
            <div class="menu-btn">
                <div class="btn-line"></div>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
            </div>
            <nav class="master-nav">
                <ul class="menu">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            HOME
                            <small>หน้าหลัก</small>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blogs.html">
                            BLOGS
                            <small>บล็อกทีมงาน</small>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">
                            CONTACT
                            <small>ติดต่อเรา</small>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `

document.getElementById("master-footer").innerHTML = `
<div class="copyright"><h4>Nekoportal | เครือแมววาร์ป &copy 2019 - ` 
+ new Date().getFullYear() 
+ `</h4></div>
`


// Master-page loader

document.getElementById("master-header").innerHTML = `
    <header>
            <a href="#" class="logo">NEKOPORTAL</a>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            HOME
                            <small>หน้าหลัก</small>
                        </a>
                    </li>
                    <li>
                        <a href="blogs.html">
                            BLOGS
                            <small>บล็อกทีมงาน</small>
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                            CONTACT
                            <small>ติดต่อเรา</small>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `

document.getElementById("master-footer").innerHTML = 
`<div class="copyright"><h4>Nekoportal | เครือแมววาร์ป &copy 2019 - ` + new Date().getFullYear() + `</h4></div>`
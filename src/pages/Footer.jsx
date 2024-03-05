function Footer () {  
     
    return(         
        <footer className="footer t_center">
            <h2 className="ft_bi"><img src="/img/common/ft_bi.png" alt="바나타이거 커피" /></h2>
            <ul className="policy fs_def">
                <li className="on"><a href="fran.asp.html#none" className="bindPolicyModalOpen">개인정보처리방침</a></li>
                <li>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                <li><a href="fran.asp.html#none" className="bindPolicyModalOpen">이메일무단수집거부</a></li>
            </ul>
            <ul className="ft_sns_wrap fs_def">
                <li className="ft_sns"><a href="fran.asp.html#none"><img src="/img/common/ft_sns01.png" alt="" /></a></li>
                <li className="ft_sns"><a href="fran.asp.html#none"><img src="/img/common/ft_sns02.png" alt="" /></a></li>
            </ul>
            <address className="address">
                (주)맥스원이링크&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;대표이사 : 황규연&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;사업자등록번호 : 109-81-99153<br />
                주소 : 서울시 구로구 디지털로 26길 61 에이스하이엔드타워 2차 1402호&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;대표번호 : 1600-4458&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;팩스 : 02-6340-1701
            </address>
            <p className="ft_copy">Copyright (C) (주)맥스원이링크  Allright Reserved.</p>
        </footer>
    );
}

export default Footer;
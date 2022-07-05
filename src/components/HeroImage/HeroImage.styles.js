import styled from 'styled-components';


export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%
    ),
    url(${({image}) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 500px;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    };
  
`;

export const Content = styled.div`
    padding: 20px;
    margin: 0 auto;
    max-width: var(--maxWidth);
   
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    margin-right: 20px;
    min-height: 100px;
    bottom: 40px;
    position: absolute;
    color: var(--white);

    h1{
        font-size: var(--fontSuperBig);

        @media screen and (max-width:720px) {
            font-size: var(--fontSuperBig);
    }
    }


    p{
        font-size: var(--fontMedium);

        @media screen and (max-width:720px) {
            font-size: var(--fontSmall);
    }
    }

    @media screen and (max-width:720px) {
     max-width :100% ;
    }
`;
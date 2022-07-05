import React,{ useState, useEffect, useRef} from "react";

//styled
import { Wrapper, Content } from "./SearchBar.styles";

// image
import searchIcon from './../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {

        const [state,setState] = useState("");
        const initial = useRef(true);

        useEffect(() => {
            if(initial.current){
                initial.current = false;
                return; 
            }
            const timer = setTimeout(() => {
                setSearchTerm(state);
            },1000)
            return () => clearTimeout(timer);
          },[setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='searcg-icon'/>
                <input
                    type='text'
                    placeholder="search movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};
export default SearchBar;
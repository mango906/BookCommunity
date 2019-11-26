import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Board from "../components/Board";
import Footer from "../components/Footer";

@inject("article")
@observer
class DetailBoard extends Component {
   state = {
      page: 1,
      data: []
   };

   async componentDidMount() {
      const { match, article } = this.props;
      const id = match.params.id;
      const data = await article.fetchArticle(id);
      this.setState({
         data
      });
   }

   handlePrev = () => {
      if (this.state.page === 1) return;
      this.setState({
         page: this.state.page - 1
      });
   };

   handleNext = () => {
      if (this.state.page === this.state.data.article.length) return;
      this.setState({
         page: this.state.page + 1
      });
   };

   render() {
      const { data, page } = this.state;

      const Wrapper = styled("div")`
         display: flex;
         flex-direction: column;
         height: 100%;
         align-items: center;
         background-color: #f1f3f5;
      `;

      const Inner = styled("div")`
         display: flex;
         flex-direction: column;
         width: 50%;
         height: 100%;
         background-color: #fff;

         @media (max-width: 768px) {
            width: 100%;
            padding: 20px;
         }
      `;

      return (
         <Wrapper>
            <Inner>
               <Board article={data.article && data.article[page - 1].text} />
               <Footer
                  page={page}
                  color="#000"
                  handlePrev={this.handlePrev}
                  handleNext={this.handleNext}
               />
            </Inner>
         </Wrapper>
      );
   }
}

export default DetailBoard;

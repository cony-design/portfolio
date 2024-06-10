"use client";
import Link from 'next/link'
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  background-color: #171717;
`;

const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding-inline-start: 1em;
  padding-block-end: .25em;
`;

const NewsArticle = styled.li`
`;


const HomeClient = ({ articles }) => {
 
  return (
    <Container>
      <NewsList>
        {articles.map((article) => (
          <NewsArticle key={article._id}>
            <Link href={`articles/${article.slug}`}>{article.title}</Link>
          </NewsArticle>
        ))}
      </NewsList>
    </Container>
  )
}

export default HomeClient;

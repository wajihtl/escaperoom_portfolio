import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(
  motion.a
)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)((props) => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`,
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``;

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*y9MIPaHezZZDMkgI.jpg",
      authorImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      title: "Setup and Automate Deployment React App on VM using Gitlab",
      description:
        "In this article, I want to share my experience with cicd react app on GitLab. This article will discuss: Dockerize React App Create Gitlab Ci.",
      authorName: "Charlotte Delos",
      authorProfile: "Travel Advocate",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://media.licdn.com/dms/image/C4D03AQFpkulsc36PAQ/profile-displayphoto-shrink_200_200/0/1635616460038?e=1683158400&v=beta&t=RsEps5e_auQZHu9_BtuVwqOzqLEeJF-WQ09QTVmpV1c",
      title: "Capture the Flag — CTF",
      description:
        "CTF’s (capture the flag) are security/hacking competitions which consist of participants attacking, information gathering, reverse engineering, exploiting and priv-escaltion to reach the end goal, a “flag” which is usually found as a string of text.",
      authorName: "Achraf Jday",
      authorProfile: "An entrepreneur and leader of tech communities",
      url: "https://reddit.com",
    },
  ];

  const recentPosts = [
    {
      postImageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*pOduLMafiygu1xJ2.png",
      title: "SSH — Secure Shell",
      authorName: "Aaron Patterson",
      url: "https://reddit.com",
    },

    {
      postImageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5OrOB1LSuPIC9RIgOlrFIA.png",
      title: "How I’ve captured all passwords trying to ssh into my server!",
      authorName: "Tony Hawk",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://seahawkmedia.com/wp-content/uploads/2022/08/ssh.png",
      title: "ssh fundementals",
      authorName: "The Ultimate Power of ssh",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*eHYk4AjHhfqmwlK5uNu3Dw.png",
      title: "what is digital ocean",
      authorName: "ftp vs ssh",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://miro.medium.com/v2/resize:fit:720/0*hC7hysciy4XPglrC",
      title: "ssh fundementals",
      authorName: "why ssh is important",
      url: "https://timerse.com",
    },
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Popular Posts</Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post
                  key={index}
                  href={post.url}
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    $imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Recent Posts</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group">
                  <PostTextContainer>
                    <Title>{post.title}</Title>
                    <AuthorName>{post.authorName}</AuthorName>
                  </PostTextContainer>
                  <Image $imageSrc={post.postImageSrc} />
                </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};

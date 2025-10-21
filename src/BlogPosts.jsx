// src/BlogPosts.jsx
import { useState, useEffect } from "react";
import { Box, Heading, Text, Link, Image } from "@chakra-ui/react";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://arashidlaw.ca/wp-json/wp/v2/posts?_embed")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <Text>Loading posts...</Text>;

  return (
    <Box mt={8}>
      {posts.map((post) => {
        const featuredImage =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <Box
            key={post.id}
            mb={8}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="gray.50"
          >
            {featuredImage && (
              <Image src={featuredImage} alt="" mb={4} borderRadius="md" />
            )}
            <Heading as="h3" size="md" mb={2}>
              <Link href={post.link} isExternal>
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </Heading>
            <Text
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              color="gray.700"
            />
          </Box>
        );
      })}
    </Box>
  );
}

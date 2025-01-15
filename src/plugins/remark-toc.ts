// Credits go to https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents

import fs from 'fs';

import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import { toString } from 'mdast-util-to-string';
import { remark } from 'remark';
import path from 'path';
import { visit } from 'unist-util-visit';

import * as directory from '@/constants/directory';

const addID = (node, nodes) => {
  const slugger = new GithubSlugger();
  const id = slugger.slug(node.children.map((c) => c.value).join(''));
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ''}`,
    },
  };
};

const transformNode = (node, output, indexMap) => {
  const transformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
};

const getHeadings = (root) => {
  const nodes = {};
  const output = [];
  const indexMap = {};
  visit(root, 'heading', (node) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
};

const headingTree = () => {
  return (node, file) => {
    file.data.headings = getHeadings(node);
  };
};

export const getToc = async (id) => {
  const fullPath = path.join(directory.ARTICLES, `${id}/page.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);
  return processedContent.data.headings;
};

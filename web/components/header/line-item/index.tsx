import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

export function LineItem({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href}>
      <a>
        <Label>{label}</Label>
      </a>
    </Link>
  );
}

const Label = styled.label`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  max-width: 200px;
  padding: 12px;
  border-radius: 4px;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  transition: all 0.1s ease-in-out;
`;

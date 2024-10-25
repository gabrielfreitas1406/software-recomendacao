import * as React from "react";

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <>
      <section className="card"></section>
      {/*<style jsx>{`
        .card {
          border-radius: 10px;
          background-color: rgba(224, 233, 245, 1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          min-height: 355px;
        }
      `}</style>*/}
    </>
  );
};

export default Card;

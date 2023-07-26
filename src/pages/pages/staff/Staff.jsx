import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import Spinner from '_components/spinner/Spinner';
import { docListStore, getDocListEvent, getDocListStatusStore } from '_services/commonDomain';
import {
  StyledProfileDiv1,
  StyledProfileDiv2,
  StyledProfileDiv3,
  StyledProfileDiv4,
  StyledProfileDiv5,
  StyledProfileImg,
  StyledProfileH4,
  StyledProfileParagraph,
  StyledProfileAnchor,
  StyledStaffGridDiv1,
  StyledStaffGridDiv2,
  StyledStaffGridDiv3
} from './staff-styled';

const Staff = () => {
  const docList = useStore(docListStore);
  const isPending = useStore(getDocListStatusStore);

  useEffect(() => {
    getDocListEvent();
  }, []);

  return (
    <Layout title="Staff">
      {isPending ? (
        <Spinner />
      ) : (
        <StyledStaffGridDiv1>
          <StyledStaffGridDiv2>
            <StyledStaffGridDiv3>
              {docList.map((doc) => {
                const fullName = `${doc.firstName} ${doc.lastName}`;
                return (
                  <Link key={doc.id} to={`${doc.id}`}>
                    <StyledProfileDiv1>
                      <StyledProfileDiv2>
                        <StyledProfileDiv3>
                          <StyledProfileImg src={doc.image} />
                          <StyledProfileDiv4>
                            <StyledProfileAnchor>1</StyledProfileAnchor>
                            <StyledProfileAnchor>2</StyledProfileAnchor>
                            <StyledProfileAnchor>3</StyledProfileAnchor>
                            <StyledProfileAnchor>4</StyledProfileAnchor>
                          </StyledProfileDiv4>
                        </StyledProfileDiv3>
                        <StyledProfileDiv5>
                          <StyledProfileH4>{fullName}</StyledProfileH4>
                          <StyledProfileParagraph>{doc.spec}</StyledProfileParagraph>
                        </StyledProfileDiv5>
                      </StyledProfileDiv2>
                    </StyledProfileDiv1>
                  </Link>
                );
              })}
            </StyledStaffGridDiv3>
          </StyledStaffGridDiv2>
        </StyledStaffGridDiv1>
      )}
    </Layout>
  );
};

export default Staff;

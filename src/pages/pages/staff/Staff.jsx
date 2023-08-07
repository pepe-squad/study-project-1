import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import Spinner from '_components/spinner/Spinner';
import { docListStore, getDocListEvent, getDocListStatusStore } from '_services/commonDomain';
import {
  BottomDiv,
  ProfileContainerDiv,
  ProfileImage,
  ProfileImageDiv,
  ProfileNameDiv,
  ProfileNameH4,
  ProfileSpec,
  StaffGridDiv
} from './styled-staff';
import ProfileLinks from './components/profile-links/ProfileLinks';
import TopDiv from './components/top-div/TopDiv';

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
        <div>
          <TopDiv />
          <BottomDiv>
            <StaffGridDiv>
              {docList.map((doc) => {
                const fullName = `${doc.firstName} ${doc.lastName}`;
                return (
                  <Link key={doc.id} to={`${doc.id}`}>
                    <ProfileContainerDiv>
                      <ProfileImageDiv>
                        <ProfileImage src={doc.image} />
                        <ProfileLinks />
                      </ProfileImageDiv>
                      <ProfileNameDiv>
                        <ProfileNameH4>{fullName}</ProfileNameH4>
                        <ProfileSpec>{doc.spec}</ProfileSpec>
                      </ProfileNameDiv>
                    </ProfileContainerDiv>
                  </Link>
                );
              })}
            </StaffGridDiv>
          </BottomDiv>
        </div>
      )}
    </Layout>
  );
};

export default Staff;

/**
 * Script that zips and deploys the Sites Apps server as a Node.js application on Application
 * Container Cloud. 
 * Original author: shaun.smith@oracle.com
 * Modified by: linus.hakansson@oracle.com
 */

export ID_DOMAIN=$1
export USER_ID=$2
export USER_PASSWORD=$3
export APP_NAME="CloudCafeJETApp"
export ARCHIVE_FILE="CloudCafeJETApp.zip"
export ARCHIVE_LOCAL=$ARCHIVE_FILE
export APAAS_HOST=$4
export RUNTIME=$5

# ZIP PROJECT
zip -r ${ARCHIVE_FILE} .

# CREATE CONTAINER
echo '\n[info] Creating container\n'
curl -i -X PUT \
    -u ${USER_ID}:${USER_PASSWORD} \
    https://${ID_DOMAIN}.storage.oraclecloud.com/v1/Storage-$ID_DOMAIN/$APP_NAME

# PUT ARCHIVE IN STORAGE CONTAINER
echo '\n[info] Uploading application to storage\n'
curl -i -X PUT \
  -u ${USER_ID}:${USER_PASSWORD} \
  https://${ID_DOMAIN}.storage.oraclecloud.com/v1/Storage-$ID_DOMAIN/$APP_NAME/$ARCHIVE_FILE \
      -T $ARCHIVE_LOCAL

# See if application exists
let httpCode=`curl -i -X GET  \
  -u ${USER_ID}:${USER_PASSWORD} \
  -H "X-ID-TENANT-NAME:${ID_DOMAIN}" \
  -H "Content-Type: multipart/form-data" \
  -sL -w "%{http_code}" \
  https://${APAAS_HOST}/paas/service/apaas/api/v1.1/apps/${ID_DOMAIN}/${APP_NAME} \
  -o /dev/null`

# If application exists...
if [ $httpCode == 200 ]
then
  # Update application
  echo '\n[info] Updating application...\n'
  curl -i -X PUT  \
    -u ${USER_ID}:${USER_PASSWORD} \
    -H "X-ID-TENANT-NAME:${ID_DOMAIN}" \
    -H "Content-Type: multipart/form-data" \
    -F archiveURL=${APP_NAME}/${ARCHIVE_FILE} \
    https://${APAAS_HOST}/paas/service/apaas/api/v1.1/apps/${ID_DOMAIN}/${APP_NAME}
else
  # Create application and deploy
  echo '\n[info] Creating application...\n'
  curl -i -X POST  \
    -u ${USER_ID}:${USER_PASSWORD} \
    -H "X-ID-TENANT-NAME:${ID_DOMAIN}" \
    -H "Content-Type: multipart/form-data" \
    -F "name=${APP_NAME}" \
    -F "runtime=${RUNTIME}" \
    -F "subscription=Hourly" \
    -F archiveURL=${APP_NAME}/${ARCHIVE_FILE} \
    https://${APAAS_HOST}/paas/service/apaas/api/v1.1/apps/${ID_DOMAIN}
fi
echo '\n[info] Deployment complete\n'

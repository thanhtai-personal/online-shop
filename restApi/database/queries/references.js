
const createReferenceKey = async (isEnd = false) => {
  console.log('createReferenceKey start')
  const createReferenceKeyQueryResource = `ALTER TABLE resource 
  ADD CONSTRAINT fkey_resource_google_account FOREIGN KEY ("accountId")
    REFERENCES googleaccount (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  ADD CONSTRAINT fkey_resource_user FOREIGN KEY ("userId")
    REFERENCES "user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  const createReferenceKeyQueryGoogleAccount = `ALTER TABLE googleaccount ADD CONSTRAINT fkey_googleaccount_user FOREIGN KEY ("userId")
    REFERENCES "user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  try {
    await pool.query(createReferenceKeyQueryResource)
    await pool.query(createReferenceKeyQueryGoogleAccount)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

const dropReferenceKey = async (isEnd = false) => {
  console.log('dropReferenceKey start')
  const dropReferenceKeyQueryResource = `ALTER TABLE IF EXISTS resource DROP CONSTRAINT IF EXISTS fkey_resource_event_note,
  DROP CONSTRAINT IF EXISTS fkey_resource_google_account,
  DROP CONSTRAINT IF EXISTS fkey_resource_user`
  const dropReferenceKeyQueryGoogleAccount = `ALTER TABLE IF EXISTS googleaccount DROP CONSTRAINT IF EXISTS fkey_googleaccount_user`
  try {
    await pool.query(dropReferenceKeyQueryResource)
    await pool.query(dropReferenceKeyQueryGoogleAccount)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createReferenceKey,
  drop: dropReferenceKey
}
var assert = require('assert'),
  session = require('express-session'),
  path = require('path'),
  SequelizeStore = require('connect-session-sequelize')(session.Store),
  Sequelize = require('sequelize'),
  config = require('./../config/config'),
  sequelize = require('./../config/db');
Sequelize.Promise.longStackTraces()
var db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    // post: config.port,
    logging: false,
  }),
  store = new SequelizeStore({
    db: db
  }),

  sessionId = '1234a',
  sessionData = {
    foo: 'bar',
    'baz': 42
  };

describe('store', function () {
  before(function () {
    return store.sync()
  })
  it('should have no length', function (done) {
    store.length(function (_err, c) {
      assert.equal(0, c)
      done()
    })
  })
})

describe('store db', function () {
  var db = {}
  beforeEach(function () {
    db = sequelize;

    db.import(path.join(__dirname, '../app/models/ZC_Session'))

  })

  it('should take a specific table from Sequelize DB', function () {
    assert.ok(db.models.ZC_Session, 'Session model added to Sequelize Object')
    var store = new SequelizeStore({
      db: db,
      table: 'ZC_Session'
    })
    assert.equal(store.sessionModel.name, 'ZC_Session')
  })

  it('should load the default model if No Table is specified in options', function () {
    var store = new SequelizeStore({
      db: db,
      table: 'ZC_Session'
    })
    assert.equal(store.sessionModel.name, 'ZC_Session')
  })
})

describe('#set()', function () {
  before(function () {
    return store.sync()
  })

  it('should save the session', function (done) {
    store.set(sessionId, sessionData, function (err, session) {
      assert.ok(!err, '#set() got an error')
      assert.ok(session, '#set() is not ok')

      store.length(function (err, c) {
        assert.ok(!err, '#length() got an error')
        assert.equal(1, c, '#length() is not 1')

        store.get(sessionId, function (err, data) {
          assert.ok(!err, '#get() got an error')
          assert.deepEqual(sessionData, data)

          store.destroy(sessionId, function (err) {
            assert.ok(!err, '#destory() got an error')
            done()
          })

        })
      })
    })
  })

  it('should have a future expires', function (done) {
    store.set(sessionId, sessionData, function (err, session) {
      assert.ok(!err, '#set() got an error')
      assert.ok(session, '#set() is not ok')

      assert.ok(session.expires, '.expires does not exist')
      assert.ok(session.expires instanceof Date, '.expires is not a date')
      assert.ok(session.expires > new Date(), '.expires is not in the future')

      store.destroy(sessionId, function (err) {
        assert.ok(!err, '#destory() got an error')
        done()
      })

    })
  })
})

describe('extendDefaultFields', function () {
  var db, store
  before(function () {
    function extend(defaults, session) {
      defaults.userId = session.baz
      return defaults
    }
    db = sequelize;
    db.import(path.join(__dirname, '../app/models/ZC_Session'))
    store = new SequelizeStore({
      db: db,
      table: 'ZC_Session',
      extendDefaultFields: extend
    })
    return store.sync()
  })
  it('should extend defaults when extendDefaultFields is set', function (done) {
    store.sync().then(function () {
      store.set(sessionId, sessionData, function (err, session) {
          assert.ok(!err, '#set() got an error')
          assert.ok(session, '#set() is not ok')

          db.models.TestSession.findOne({
              where: {
                userId: sessionData.baz
              }
            })
            .then(function (_session) {
              assert.ok(_session, 'session userId not saved')
              assert.deepEqual(session.dataValues, _session.dataValues)

              store.destroy(sessionId, function (err) {
                assert.ok(!err, '#destroy() got an error')
                done()
              })
            })
        })
        .catch(function (err) {
          assert.of(!err, "Failed to sync the database")
        })
    })
  })

  it('should update fields when extendDefaultFields is set', function (done) {
    store.set('testupdateFields', {
      foo: 'bar'
    }, function (err, session) {
      assert.ok(!err, '#set() got an error')
      assert.ok(session, '#set() is not ok')

      store.set('testupdateFields', {
        baz: 'baz',
        yolo: 'haha'
      }, function (err, innerSession) {
        assert.ok(!err, '#set() got an error')
        assert.ok(innerSession, '#set() is not ok')

        db.models.TestSession.findOne({
            where: {
              userId: 'baz'
            }
          })
          .then(function (_session) {
            assert.ok(_session, 'session userId not saved')
            assert.deepEqual(innerSession.dataValues, _session.dataValues)

            store.destroy(sessionId, function (err) {
              assert.ok(!err, '#destroy() got an error')
              done()
            })
          })
      })
    })
  })
})
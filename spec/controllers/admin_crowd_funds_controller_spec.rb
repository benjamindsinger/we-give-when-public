require 'rails_helper'

describe Admin::CrowdFundsController do
  def make_request
    request.env['HTTPS'] = 'on'
    get :index
  end

  let(:cause) { Cause.create!(name: 'Fight for Rights') }

  describe '#index' do
    context 'not logged in' do
      it 'fails' do
        make_request
        expect(response.status).to eq 302
      end
    end

    context 'not admin' do
      let(:cause_admin) {
        CauseAdmin.create!(
          email: 'test@example.com',
          password: 'test-password',
          cause: cause
        )
      }

      it 'fails' do
        sign_in(cause_admin)
        make_request
        expect(response.status).to eq 302
      end
    end

    context 'admin' do
      let(:cause_admin) {
        CauseAdmin.create!(
          email: 'test@example.com',
          password: 'test-password',
          super_admin: true
        )
      }

      it 'succeeds' do
        sign_in(cause_admin)
        make_request
        expect(response.status).to eq 200
      end
    end

  end

  describe '#show' do
    context 'not logged in' do
      it 'fails' do
        make_request
        expect(response.status).to eq 302
      end
    end

    context 'not admin' do
      let(:cause_admin) {
        CauseAdmin.create!(
          email: 'test@example.com',
          password: 'test-password',
          cause: cause
        )
      }

      it 'fails' do
        sign_in(cause_admin)
        make_request
        expect(response.status).to eq 302
      end
    end

    context 'admin' do
      let(:cause_admin) {
        CauseAdmin.create!(
          email: 'test@example.com',
          password: 'test-password',
          super_admin: true
        )
      }

      it 'succeeds' do
        sign_in(cause_admin)
        make_request
        expect(response.status).to eq 200
      end
    end

  end

end
